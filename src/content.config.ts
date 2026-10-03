import { defineCollection, type SchemaContext } from "astro:content"; // AI CODE
import { glob } from "astro/loaders"; // AI CODE
import { z } from "astro/zod"; // AI CODE
import { entriesLoader } from "./lib/entries-loader"; // AI CODE

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

// the entries on /projects. each tab is one .md file, see src/lib/entries-loader.ts // AI CODE
const entry = ({ image }: SchemaContext) => // AI CODE
    z.object({ // AI CODE
        name: z.string(), // AI CODE
        // where it is in the file, set by the loader // AI CODE
        order: z.number(), // AI CODE
        href: z.string().optional(), // AI CODE
        year: z.coerce.string().optional(), // AI CODE
        tech: z.string().optional(), // AI CODE
        // a path to the picture, relative to the .md file // AI CODE
        image: image().optional(), // AI CODE
        imageAlt: z.string().optional(), // AI CODE
    }); // AI CODE

const projects = defineCollection({ // AI CODE
    loader: entriesLoader("src/content/projects.md"), // AI CODE
    schema: entry, // AI CODE
}); // AI CODE

const events = defineCollection({ // AI CODE
    loader: entriesLoader("src/content/events.md"), // AI CODE
    schema: entry, // AI CODE
}); // AI CODE

export const collections = { blog, projects, events }; // AI CODE
