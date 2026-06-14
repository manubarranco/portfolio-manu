import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    index: z.string(),
    title: z.string(),
    stage: z.string(),
    years: z.string(),
    client: z.string(),
    timeframe: z.string(),
    category: z.string(),
    summary: z.string(),
    blurb: z.string(),
    aiNative: z.boolean().default(false),
  }),
});

export const collections = { work };
