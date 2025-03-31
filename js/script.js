let darkMode = localStorage.getItem("darkMode");
darkMode = darkMode === null ? "disabled" : darkMode; // Default to disabled if null
console.log("Loaded js");

const themeToggle = document.querySelector("#theme-toggle");

// Apply the saved theme on page load
function applyTheme() {
    if (darkMode === "enabled") {
        document.documentElement.style.setProperty("--primary-light-color", "#111827");
        document.documentElement.style.setProperty("--secondary-light-color", "#1E1E2E");
        document.documentElement.style.setProperty("--primary-light-text-color", "#94949B");
        document.documentElement.style.setProperty("--button-color", "#111827");
        themeToggle.checked = true; // Set the toggle to checked
    } else {
        document.documentElement.style.setProperty("--primary-light-color", "#EFEFF0");
        document.documentElement.style.setProperty("--secondary-light-color", "#FFFFFF");
        document.documentElement.style.setProperty("--primary-light-text-color", "#000000");
        document.documentElement.style.setProperty("--button-color", "#9BD7F1");
        themeToggle.checked = false; // Set the toggle to unchecked
    }
}

// Call applyTheme on page load
applyTheme();

// Function to toggle the theme
function changeTheme() {
    console.log("Current theme: " + darkMode);

    if (darkMode === "enabled") {
        // Switch to light mode
        localStorage.setItem("darkMode", "disabled");
        darkMode = "disabled";
        document.documentElement.style.setProperty("--primary-light-color", "#EFEFF0");
        document.documentElement.style.setProperty("--secondary-light-color", "#FFFFFF");
        document.documentElement.style.setProperty("--primary-light-text-color", "#000000");
        document.documentElement.style.setProperty("--button-color", "#9BD7F1");
        console.log("Theme changed to light mode");
    } else {
        // Switch to dark mode
        localStorage.setItem("darkMode", "enabled");
        darkMode = "enabled";
        document.documentElement.style.setProperty("--primary-light-color", "#111827");
        document.documentElement.style.setProperty("--secondary-light-color", "#1E1E2E");
        document.documentElement.style.setProperty("--primary-light-text-color", "#94949B");
        document.documentElement.style.setProperty("--button-color", "#111827");
        console.log("Theme changed to dark mode");
    }
}

// Attach the event listener to the theme toggle
themeToggle.addEventListener("click", changeTheme);






