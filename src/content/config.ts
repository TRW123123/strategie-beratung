import { defineCollection, z } from 'astro:content';

const pseoCollection = defineCollection({
    type: 'content',
    schema: z.object({
        // --- Core (Required) ---
        title: z.string(),
        keyword: z.string(),
        intent: z.string(),
        cluster: z.enum(['loesungen', 'probleme', 'foerderung', 'compliance']),
        description: z.string(),
        bafa_badge: z.boolean().default(true),

        // --- ROI & Data Points (Optional, für Data-Driven Content) ---
        roi_data: z.object({
            metric: z.string(),
            value: z.string(),
            source: z.string().optional(),
        }).optional(),
        savings_range: z.object({
            min: z.number(),
            max: z.number(),
            unit: z.enum(['euro_per_year', 'hours_per_week', 'percent']),
        }).optional(),

        // --- E-E-A-T & Sources ---
        sources: z.array(z.object({
            name: z.string(),
            url: z.string().url().optional(),
        })).optional(),

        // --- Approach Steps (Cluster-Driven, replaces hardcoded "Unser Ansatz") ---
        approach_steps: z.array(z.object({
            title: z.string(),
            text: z.string(),
        })).min(2).max(5).optional(),

        // --- FAQ (für FAQPage Schema + Interactive Accordion) ---
        faq: z.array(z.object({
            question: z.string(),
            answer: z.string(),
        })).min(1).max(5).optional(),

        // --- DOM Variation Hint ---
        content_format: z.enum(['prose', 'checklist', 'comparison', 'steps']).default('prose'),
    })
});

export const collections = {
    'pseo': pseoCollection,
};
