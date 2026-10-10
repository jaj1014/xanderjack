import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pieces = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/pieces' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			medium: z.string(),
			year: z.number(),
			image: image(),
			images: z.array(image()).optional(),
			materials: z.string().optional(),
			order: z.number().optional(),
		}),
});

export const collections = { pieces };
