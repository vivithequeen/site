import type { ImageMetadata } from "astro"; // AI CODE
import infinityLost from "../assets/images/projects/infinity-lost.png"; // AI CODE
import renderer3d from "../assets/images/projects/3d-renderer.png"; // AI CODE
import esp32Devboard from "../assets/images/projects/esp32-devboard.png"; // AI CODE
import vEngine from "../assets/images/projects/vengine.png"; // AI CODE
import portalPuzzle from "../assets/images/projects/portal-puzzle.png"; // AI CODE
import tuiMusicPlayer from "../assets/images/projects/tui-music-player.png"; // AI CODE
import horizonsBanner from "../assets/images/events/horizons-banner.png"; // AI CODE
import flagshipBanner from "../assets/images/events/flagship-banner.png"; // AI CODE
import sunbeamBanner from "../assets/images/events/sunbeam-banner.png"; // AI CODE

// one entry per project on /projects, in the order they're shown. // AI CODE
// to add one: drop its picture in src/assets/images/projects, import it above, add an entry // AI CODE
export interface Entry { // AI CODE
    name: string; // AI CODE
    href?: string; // AI CODE
    year?: string; // AI CODE
    tech?: string; // AI CODE
    image?: ImageMetadata; // AI CODE
    imageAlt?: string; // AI CODE
    description?: string; // AI CODE
} // AI CODE

export const projects: Entry[] = [ // AI CODE
    { // AI CODE
        name: "sarkeon", // AI CODE
        href: "https://github.com/vivithequeen/sarkeon-godot", // AI CODE
        tech: "C#, Godot", // AI CODE
    }, // AI CODE
    { // AI CODE
        name: "infinity lost", // AI CODE
        href: "https://vivithequeen.itch.io/infinity-lost", // AI CODE
        year: "2025", // AI CODE
        tech: "Godot", // AI CODE
        image: infinityLost, // AI CODE
        imageAlt: "a screenshot of infinity lost", // AI CODE
        description: "a 3D FPS made in 4 days for GMTKF Game Jam 2025, and submitted to Hack Club's Jumpstart program.", // AI CODE
    }, // AI CODE
    { // AI CODE
        name: "3d software renderers", // AI CODE
        href: "https://github.com/vivithequeen/v3DRenderer", // AI CODE
        tech: "C++, C, SDL3, SFML, ImGui", // AI CODE
        image: renderer3d, // AI CODE
        imageAlt: "a screenshot of a 3d renderer", // AI CODE
        description: "3D renderers built from scratch: an OBJ model renderer in C++, a Doom-style renderer in C, and a raycaster.", // AI CODE
    }, // AI CODE
    { // AI CODE
        name: "rfid scanner board", // AI CODE
        year: "2025 – 2026", // AI CODE
        tech: "ESP32-C3, KiCad, SPI", // AI CODE
        image: esp32Devboard, // AI CODE
        imageAlt: "4 images of a esp32 devboard", // AI CODE
        description: "an attendance scanner system for my school, made with a class of 11 other students. i designed a custom ESP32-C3 PCB with an SPI RFID reader, status LEDs and a transistor-driven buzzer.", // AI CODE
    }, // AI CODE
    { // AI CODE
        name: "vengine", // AI CODE
        href: "https://github.com/vivithequeen/vEngine", // AI CODE
        tech: "C++, raylib, ImGui", // AI CODE
        image: vEngine, // AI CODE
        imageAlt: "picture of a game engine", // AI CODE
        description: "a 3D game engine with a built-in editor, textured model loading, and world saving and loading.", // AI CODE
    }, // AI CODE
    { // AI CODE
        name: "portal puzzle game", // AI CODE
        href: "https://github.com/vivithequeen/non-euclidean", // AI CODE
        tech: "Godot, TrenchBroom", // AI CODE
        image: portalPuzzle, // AI CODE
        imageAlt: "picture of a puzzle game", // AI CODE
        description: "a non-Euclidean portal puzzle game. levels are built in TrenchBroom and imported with func_godot.", // AI CODE
    }, // AI CODE
    { // AI CODE
        name: "tui music player", // AI CODE
        href: "https://github.com/vivithequeen/tui-music-player", // AI CODE
        tech: "Go, Bubble Tea", // AI CODE
        image: tuiMusicPlayer, // AI CODE
        imageAlt: "picture of a tui music player", // AI CODE
        description: "a terminal music player for local music libraries.", // AI CODE
    }, // AI CODE
]; // AI CODE

// same as above, for the events tab. pictures go in src/assets/images/events // AI CODE
export const events: Entry[] = [ // AI CODE
    { // AI CODE
        name: "horizons", // AI CODE
        href: "https://horizons.hackclub.com", // AI CODE
        year: "2026", // AI CODE
        image: horizonsBanner, // AI CODE
        imageAlt: "the horizons banner", // AI CODE
        description: "meoew meow meow meowmeow meow emoew mewo emwoewemowe", // AI CODE
    }, // AI CODE
    { // AI CODE
        name: "campfire flagship", // AI CODE
        href: "https://flagship.hackclub.com", // AI CODE
        year: "2025 – 2026", // AI CODE
        image: flagshipBanner, // AI CODE
    }, // AI CODE
    { // AI CODE
        name: "sunbeam boston", // AI CODE
        href: "https://sunbeam.hackclub.com", // AI CODE
        year: "2026", // AI CODE
        image: sunbeamBanner, // AI CODE
        description: "lead organizer. ran Boston's Sunbeam, a one-day social coding event for girls ages 13–18, held alongside 20+ cities worldwide.", // AI CODE
    }, // AI CODE
]; // AI CODE
