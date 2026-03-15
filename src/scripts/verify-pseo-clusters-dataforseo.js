import axios from 'axios';
import fs from 'fs';
import path from 'path';

try {
    const envContent = fs.readFileSync(path.join(process.cwd(), '.env'), 'utf8');
    envContent.split('\n').forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            process.env[match[1].trim()] = match[2].trim().replace(/^["'](.*)["']$/, '$1');
        }
    });
} catch (e) { }

// Load DataForSEO credentials
const DATAFORSEO_LOGIN = process.env.DATAFORSEO_LOGIN || '';
const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD || '';
const API_URL = 'https://api.dataforseo.com/v3/dataforseo_labs/google/keyword_metrics/live';

// The highly targeted keywords derived from our Perplexity & Gemini Deep Research
const targetKeywords = [
    // Cluster 1: System- & Software-Evaluierung (Lösungsevaluierung)
    "erp system maschinenbau",
    "erp system mittelstand",
    "crm b2b mittelstand vergleich",
    "marketing automation software b2b",
    "beste cybersecurity lösung mittelstand",
    "cloud erp dsgvo konform",
    "hubspot alternative b2b",

    // Cluster 2: Schnittstellen & Daten-Silos
    "erp crm schnittstellen",
    "rechnungserstellung automatisieren mittelstand",
    "kundenservice automatisieren b2b",
    "hubspot erp integration",
    "sap salesforce schnittstelle",

    // Cluster 3 & 7: Performance-Marketing Frust & Sales Intelligence
    "b2b leadgenerierung agentur",
    "linkedin ads b2b kosten",
    "b2b sales intelligence tools",
    "zoominfo alternative deutschland",
    "cognism alternative b2b",

    // Cluster 4: Taktische KI-Implementierung
    "ki im vertrieb mittelstand",
    "ki marketing automatisierung b2b",
    "ki beratung strategie deutschland",
    "generative ki dateninfrastruktur",

    // Cluster 5: Skalierungsschmerz & Audit
    "b2b vertriebsaudit",
    "marketing audit strategie b2b",
    "vertriebsprozesse skalieren",
    "go to market strategie b2b"
];

async function fetchKeywordMetrics() {
    if (!DATAFORSEO_LOGIN || !DATAFORSEO_PASSWORD) {
        console.error('❌ Missing DataForSEO credentials in environment variables.');
        return;
    }

    const authHeader = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

    const postData = [{
        keywords: targetKeywords,
        location_name: "Germany",
        language_name: "German"
    }];

    console.log(`🚀 Sending ${targetKeywords.length} highly targeted B2B keywords to DataForSEO...`);

    try {
        const response = await axios({
            method: 'post',
            url: API_URL,
            auth: {
                username: DATAFORSEO_LOGIN,
                password: DATAFORSEO_PASSWORD
            },
            data: postData,
            headers: {
                'content-type': 'application/json'
            }
        });

        const result = response.data.tasks[0].result;

        if (!result || result.length === 0) {
            console.log('⚠️ No data returned from DataForSEO.');
            return;
        }

        let reportMarkdown = `# DataForSEO Hard-Fact-Check: B2B Cluster Metrics\n\n`;
        reportMarkdown += `*Generated: ${new Date().toISOString()}*\n\n`;
        reportMarkdown += `| Keyword | Search Volume | CPC (USD) | Competition (0-1) | Intent |\n`;
        reportMarkdown += `|---|---|---|---|---|\n`;

        // Sort by search volume descending
        const sortedResults = result.sort((a, b) => {
            const volA = a.keyword_info?.search_volume || 0;
            const volB = b.keyword_info?.search_volume || 0;
            return volB - volA;
        });

        sortedResults.forEach(item => {
            const kw = item.keyword;
            const metrics = item.keyword_info;

            const vol = metrics?.search_volume || 0;
            const cpc = metrics?.cpc ? metrics.cpc.toFixed(2) : 'N/A';
            const comp = metrics?.competition_level || 'N/A';
            const intentArr = item.keyword_properties?.keyword_intent || [];
            const intentStr = intentArr.map(i => i.label).join(', ') || 'N/A';

            reportMarkdown += `| ${kw} | **${vol}** | $${cpc} | ${comp} | ${intentStr} |\n`;
        });

        const outputPath = path.join(process.cwd(), 'dataforseo_cluster_verification_report.md');
        fs.writeFileSync(outputPath, reportMarkdown, 'utf8');

        console.log(`✅ Success! Report written to: ${outputPath}`);

    } catch (error) {
        console.error('❌ DataForSEO API Error:');
        if (error.response) {
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }
    }
}

fetchKeywordMetrics();
