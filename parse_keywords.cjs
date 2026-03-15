const fs = require('fs');

const files = [
    { name: 'Künstliche Intelligenz', path: 'C:\\Users\\User\\.gemini\\antigravity\\brain\\1f9a2d20-62dd-427c-806f-e5d2fcb69e7c\\.system_generated\\steps\\1307\\output.txt' },
    { name: 'Automatisierung', path: 'C:\\Users\\User\\.gemini\\antigravity\\brain\\1f9a2d20-62dd-427c-806f-e5d2fcb69e7c\\.system_generated\\steps\\1308\\output.txt' },
    { name: 'KI Vertrieb', path: 'C:\\Users\\User\\.gemini\\antigravity\\brain\\1f9a2d20-62dd-427c-806f-e5d2fcb69e7c\\.system_generated\\steps\\1309\\output.txt' },
    { name: 'Marketing Automatisierung', path: 'C:\\Users\\User\\.gemini\\antigravity\\brain\\1f9a2d20-62dd-427c-806f-e5d2fcb69e7c\\.system_generated\\steps\\1310\\output.txt' }
];

let mdContent = `# DataForSEO Massive Keyword Exploration (Strategie-Erweiterung)\n\n`;
mdContent += `> Diese Recherche verwirft **nicht** die bisherige pSEO-Strategie. Die bestehenden 40 Landingpages zielen spitz auf spezifische Schmerzpunkte des Mittelstands ab (High-Intent, Long-Tail). Diese erweiterte Recherche identifiziert generische "Pillar"-Themen (High-Volume) und lukrative B2B-Nischen (High-CPC) als ergänzendes Fundament.\n\n`;

for (const file of files) {
    if (fs.existsSync(file.path)) {
        const raw = fs.readFileSync(file.path, 'utf8');
        try {
            const data = JSON.parse(raw);
            let items = data.tasks?.[0]?.result?.[0]?.items || data.items || [];

            // Filter out junk
            items = items.filter(item => {
                const sv = item.keyword_info?.search_volume || 0;
                // Exclude pure brand searches that don't make sense or generic junk
                return sv >= 50;
            });

            // Format numbers to German locale (e.g., 2000 -> 2.000)
            const fmtSV = new Intl.NumberFormat('de-DE');
            const fmtCPC = new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

            // TOP BY SEARCH VOLUME (The Hubs/Pillars)
            let topVol = [...items].sort((a, b) => (b.keyword_info?.search_volume || 0) - (a.keyword_info?.search_volume || 0)).slice(0, 30);

            // TOP BY CPC (The specific Money/Intent Keywords)
            let topCpc = [...items].sort((a, b) => (b.keyword_info?.cpc || 0) - (a.keyword_info?.cpc || 0)).slice(0, 30);

            mdContent += `## ${file.name}\n\n`;

            mdContent += `### Top 30 nach Suchvolumen (Pillar-Potenzial)\n`;
            mdContent += `| Suchbegriff | Suchvolumen | CPC (€) | Wettbewerb |\n`;
            mdContent += `|---|---|---|---|\n`;
            for (const item of topVol) {
                const sv = item.keyword_info?.search_volume || 0;
                const cpc = item.keyword_info?.cpc || 0;
                const comp = item.keyword_info?.competition_level || 'N/A';
                mdContent += `| ${item.keyword} | ${fmtSV.format(sv)} | ${fmtCPC.format(cpc)} | ${comp} |\n`;
            }
            mdContent += `\n`;

            mdContent += `### Top 30 nach Klickpreis (CPC) (Hohe kommerzielle B2B-Intention)\n`;
            mdContent += `| Suchbegriff | Suchvolumen | CPC (€) | Wettbewerb |\n`;
            mdContent += `|---|---|---|---|\n`;
            for (const item of topCpc) {
                const sv = item.keyword_info?.search_volume || 0;
                const cpc = item.keyword_info?.cpc || 0;
                const comp = item.keyword_info?.competition_level || 'N/A';
                if (cpc > 0) {
                    mdContent += `| ${item.keyword} | ${fmtSV.format(sv)} | ${fmtCPC.format(cpc)} | ${comp} |\n`;
                }
            }
            mdContent += `\n`;

        } catch (e) {
            console.error('Error parsing JSON for ' + file.name);
        }
    }
}

fs.writeFileSync('C:\\Users\\User\\.gemini\\antigravity\\brain\\1f9a2d20-62dd-427c-806f-e5d2fcb69e7c\\dataforseo_massive_keyword_report.md', mdContent);
console.log('Report generated.');
