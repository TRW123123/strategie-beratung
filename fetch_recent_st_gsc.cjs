const fs = require('fs');
const path = require('path');
const mcpDir = 'C:\\Users\\User\\Projects\\mcp-google-website-intelligence';
require('dotenv').config({ path: path.join(mcpDir, '.env') });
const { google } = require('googleapis');

async function main() {
    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        "http://localhost:3333/oauth/callback"
    );

    const tokensPath = path.join(mcpDir, '.tokens.json');
    if (!fs.existsSync(tokensPath)) {
        console.error("No .tokens.json found in MCP folder");
        return;
    }

    oauth2Client.setCredentials(JSON.parse(fs.readFileSync(tokensPath, 'utf8')));
    const sc = google.searchconsole({ version: 'v1', auth: oauth2Client });
    
    const targetSiteUrl = 'sc-domain:st-automatisierung.de';
    
    // Wir betrachten die letzten 14-30 Tage, um die neuen PSEO Seiten zu fangen
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 2); 
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 30); 
    
    const startStr = startDate.toISOString().split('T')[0];
    const endStr = endDate.toISOString().split('T')[0];

    async function q(opts) {
        try {
            const res = await sc.searchanalytics.query({ siteUrl: targetSiteUrl, requestBody: opts });
            return res.data.rows || [];
        } catch (e) {
            console.error(`Error in query: ${e.message}`);
            return [];
        }
    }

    console.log(`Fetching Data (${startStr} to ${endStr}) for ${targetSiteUrl}...`);

    const queryPage = await q({
        startDate: startStr, endDate: endStr,
        dimensions: ['query', 'page'], rowLimit: 5000,
        orderBy: [{ fieldName: 'impressions', sortOrder: 'DESCENDING' }]
    });

    const outputPath = path.join(__dirname, 'gsc_recent_st.json');
    fs.writeFileSync(outputPath, JSON.stringify(queryPage, null, 2), 'utf8');
    console.log(`JSON generated at ${outputPath}`);
}
main();
