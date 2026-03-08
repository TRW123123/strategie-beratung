import { defineCollection, z } from 'astro:content';

const pseoCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        keyword: z.string(),
        intent: z.string(),
        cluster: z.enum(['loesungen', 'probleme', 'foerderung', 'compliance']),
        description: z.string(),
        bafa_badge: z.boolean().default(true)
    })
});

export const collections = {
    'pseo': pseoCollection,
};
