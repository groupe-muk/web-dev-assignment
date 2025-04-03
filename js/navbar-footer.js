// Include header and footer
let darkMode = localStorage.getItem("darkMode");
darkMode = darkMode === null ? "disabled" : darkMode; // Default to disabled if null
console.log("Loaded js");


let headerPath = "navbar.html";
let footerPath = "footer.html";

async function loadComponent(elementName, file, callback) {
    try {
        const response = await fetch(file);
        const content = await response.text();
        document.querySelector(elementName).innerHTML = content;

        // Call the callback function after the component is loaded
        if (callback) callback();
    } catch (error) {
        console.error("Error loading component:", error);
    }
}

// Load the navbar and attach the theme toggle and menu button event listeners
loadComponent("header", headerPath, () => {
    const themeToggle = document.querySelector("#theme-toggle");
    const menuButton = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");
    let menuOpen = false;

    // Attach the event listener to the theme toggle
    if (themeToggle) {
        themeToggle.addEventListener("click", changeTheme);
    }
    // Apply the saved theme on page load
function applyTheme() {
    if (!themeToggle) {
        console.warn("Theme toggle element not found.");
        return;
    }

    if (darkMode === "enabled") {
        document.documentElement.style.setProperty("--primary-light-color", "#111827");
        document.documentElement.style.setProperty("--secondary-light-color", "#1E1E2E");
        document.documentElement.style.setProperty("--primary-light-text-color", "#94949B");
        document.documentElement.style.setProperty("--button-color", "#111827");
        document.documentElement.style.setProperty("--light-calendar-button-color", "#94949B");
        document.documentElement.style.setProperty("--light-prev-days-color", "#efeff049");
        document.documentElement.style.setProperty("--light-table-header-color", "#1E1E2E");
        themeToggle.checked = true; // Set the toggle to checked
    } else {
        document.documentElement.style.setProperty("--primary-light-color", "#EFEFF0");
        document.documentElement.style.setProperty("--secondary-light-color", "#FFFFFF");
        document.documentElement.style.setProperty("--primary-light-text-color", "#000000");
        document.documentElement.style.setProperty("--button-color", "#9BD7F1");
        document.documentElement.style.setProperty("--light-calendar-button-color", "#9BD7F1");
        document.documentElement.style.setProperty("--light-prev-days-color", "#EFEFF0");
        document.documentElement.style.setProperty("--light-table-header-color", "#e0f7fa");
    
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
        applyTheme();
    } else {
        // Switch to dark mode
        localStorage.setItem("darkMode", "enabled");
        darkMode = "enabled";
        applyTheme();
    }
}

function openMenu() {
    if(menuOpen) {
        console.log("Menu closed");
        
        menu.style.display = "none";
        menuOpen = false;
    }
    else {
        console.log("Menu opened");
        
        menu.style.display = "flex";
        menuOpen = true;
    }
}

    // Apply the saved theme on page load
    applyTheme();

    // Attach the event listener to the menu button
    if (menuButton) {
        menuButton.addEventListener("click", () => {
            if (menuOpen) {
                menu.style.display = "none";
                menuOpen = false;
            } else {
                menu.style.display = "flex";
                menuOpen = true;
            }
        });

        // Optional: Hide the menu when the menu button loses focus
        menuButton.addEventListener("blur", () => {
            menu.style.display = "none";
            menuOpen = false;
        });
    }
});

// Load the footer
loadComponent("footer", footerPath);


