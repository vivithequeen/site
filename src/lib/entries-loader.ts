import { readFile } from "node:fs/promises"; // AI CODE
import { fileURLToPath } from "node:url"; // AI CODE
import type { Loader } from "astro/loaders"; // AI CODE

// loads a list of entries from a single .md file, like src/content/projects.md. // AI CODE
// each entry is a --- block of `key: value` lines, then its description in markdown: // AI CODE
//
//   ---
//   name: infinity lost
//   year: "2025"
//   ---
//
//   a 3D FPS made in 4 days...
//
// entries keep the order they're written in. a line that's only --- always starts a // AI CODE
// new block, so it can't be used as a divider inside a description // AI CODE
export const entriesLoader = (path: string): Loader => ({ // AI CODE
    name: "entries-loader", // AI CODE
    load: async ({ config, store, parseData, renderMarkdown, watcher }) => { // AI CODE
        const fileUrl = new URL(path, config.root); // AI CODE
        const filePath = fileURLToPath(fileUrl); // AI CODE

        const load = async () => { // AI CODE
            // the text before the first --- is skipped, then it goes block, description, block... // AI CODE
            const [, ...parts] = (await readFile(filePath, "utf8")).split(/^---[ \t]*\r?$/m); // AI CODE
            store.clear(); // AI CODE
            for (let i = 0; i < parts.length; i += 2) { // AI CODE
                const data: Record<string, unknown> = { order: i / 2 }; // AI CODE
                for (const line of parts[i].split("\n")) { // AI CODE
                    const match = line.match(/^\s*([\w-]+):\s*(.*?)\s*$/); // AI CODE
                    // values can be wrapped in quotes, like year: "2026" // AI CODE
                    if (match) data[match[1]] = match[2].replace(/^(["'])(.*)\1$/, "$2"); // AI CODE
                } // AI CODE
                const id = String(data.name ?? i / 2).toLowerCase().replace(/[^a-z0-9]+/g, "-"); // AI CODE
                const body = (parts[i + 1] ?? "").trim(); // AI CODE
                store.set({ // AI CODE
                    id, // AI CODE
                    data: await parseData({ id, data, filePath }), // AI CODE
                    body, // AI CODE
                    filePath: path, // AI CODE
                    rendered: await renderMarkdown(body, { fileURL: fileUrl }), // AI CODE
                }); // AI CODE
            } // AI CODE
        }; // AI CODE

        await load(); // AI CODE
        // pick up edits while running astro dev // AI CODE
        watcher?.add(filePath); // AI CODE
        watcher?.on("change", (changed) => changed === filePath && load()); // AI CODE
    }, // AI CODE
}); // AI CODE
