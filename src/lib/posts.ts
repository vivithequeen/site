import { getCollection } from "astro:content"; // AI CODE

// every post that should be on the site, newest first. drafts only show in astro dev // AI CODE
export const getPosts = async () =>
    // AI CODE
    (await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft)) // AI CODE
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()); // AI CODE

// 2026-09-28. dates in the frontmatter have no time, so they're read as utc midnight // AI CODE
export const formatDate = (date: Date) => date.toISOString().slice(0, 10); // AI CODE
