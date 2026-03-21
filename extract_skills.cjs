const fs = require('fs');
const path = require('path');

const steps = [
    { step: 391, folder: 'seo-audit' },
    { step: 392, folder: 'seo-competitor-pages' },
    { step: 393, folder: 'seo-images' },
    { step: 394, folder: 'seo-page' },
    { step: 395, folder: 'seo-plan' },
    { step: 396, folder: 'seo-sitemap' },
    { step: 408, folder: 'seo-content' },
    { step: 409, folder: 'seo-geo' },
    { step: 410, folder: 'seo-hreflang' },
    { step: 411, folder: 'seo-programmatic' },
    { step: 412, folder: 'seo-schema' },
    { step: 413, folder: 'seo-technical' }
];

const brainDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\778109d5-fbc9-4a69-b227-c9e11ff5626c';
const skillsDir = 'C:\\Users\\User\\.gemini\\antigravity\\skills';

let successCount = 0;

console.log('Starting extraction of 12 skills...');

steps.forEach(s => {
    const jsonPath = path.join(brainDir, '.system_generated', 'steps', String(s.step), 'output.txt');
    try {
        if (!fs.existsSync(jsonPath)) {
            console.error(`Skipping step ${s.step}: File not found at ${jsonPath}`);
            return;
        }
        
        const data = fs.readFileSync(jsonPath, 'utf8');
        const parsed = JSON.parse(data);
        const content = Buffer.from(parsed.content, 'base64').toString('utf8');
        
        const targetDir = path.join(skillsDir, s.folder);
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }
        
        const targetFile = path.join(targetDir, 'SKILL.md');
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log(`[SUCCESS] Wrote ${targetFile}`);
        successCount++;
    } catch (e) {
        console.error(`[ERROR] Failed on step ${s.step}:`, e.message);
    }
});

console.log(`Extraction complete: ${successCount}/12 files processed successfully.`);
