import { defineCollection } from "astro:content"; // AI CODE
import { glob } from "astro/loaders"; // AI CODE
import { z } from "astro/zod"; // AI CODE

// every .md file in src/content/blog is a post. the file name becomes its url: // AI CODE
// src/content/blog/my-post.md shows up at /blog/my-post // AI CODE
const blog = defineCollection({
    // AI CODE
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }), // AI CODE
    schema: z.object({
        // AI CODE
        title: z.string(), // AI CODE
        date: z.coerce.date(), // AI CODE
        description: z.string().optional(), // AI CODE
        // drafts show up while running astro dev, but not on the real site // AI CODE
        draft: z.boolean().default(false), // AI CODE
    }), // AI CODE
}); // AI CODE

export const collections = { blog }; // AI CODE
