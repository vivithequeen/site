// dark mode is a class on <html>, remembered in localStorage. the inline script // AI CODE
// in Frame.astro reads it back before first paint so there's no white flash // AI CODE
const button = document.querySelector<HTMLButtonElement>(".theme"); // AI CODE
const isDark = () => document.documentElement.classList.contains("dark"); // AI CODE

const label = () => {
    if (button) button.textContent = isDark() ? "[ light ]" : "[ dark ]"; // AI CODE
};

export const setTheme = (dark: boolean) => {
    // AI CODE
    document.documentElement.classList.toggle("dark", dark); // AI CODE
    try {
        // AI CODE
        localStorage.setItem("theme", dark ? "dark" : "light"); // AI CODE
    } catch {} // AI CODE
    label(); // AI CODE
}; // AI CODE

label();
button?.addEventListener("click", () => setTheme(!isDark())); // AI CODE
