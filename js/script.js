// Theme toggle functionality



// Apply the saved theme on page load
// function applyTheme() {
//     if (!themeToggle) {
//         console.warn("Theme toggle element not found.");
//         return;
//     }

//     if (darkMode === "enabled") {
//         document.documentElement.style.setProperty("--primary-light-color", "#111827");
//         document.documentElement.style.setProperty("--secondary-light-color", "#1E1E2E");
//         document.documentElement.style.setProperty("--primary-light-text-color", "#94949B");
//         document.documentElement.style.setProperty("--button-color", "#111827");
//         document.documentElement.style.setProperty("--light-calendar-button-color", "#94949B");
//         document.documentElement.style.setProperty("--light-prev-days-color", "#efeff049");
//         themeToggle.checked = true; // Set the toggle to checked
//     } else {
//         document.documentElement.style.setProperty("--primary-light-color", "#EFEFF0");
//         document.documentElement.style.setProperty("--secondary-light-color", "#FFFFFF");
//         document.documentElement.style.setProperty("--primary-light-text-color", "#000000");
//         document.documentElement.style.setProperty("--button-color", "#9BD7F1");
//         document.documentElement.style.setProperty("--light-calendar-button-color", "#9BD7F1");
//         document.documentElement.style.setProperty("--light-prev-days-color", "#EFEFF0");
//         themeToggle.checked = false; // Set the toggle to unchecked
//     }
// }

// // Call applyTheme on page load
// applyTheme();

// // Function to toggle the theme
// function changeTheme() {
//     console.log("Current theme: " + darkMode);

//     if (darkMode === "enabled") {
//         // Switch to light mode
//         localStorage.setItem("darkMode", "disabled");
//         darkMode = "disabled";
//         applyTheme();
//     } else {
//         // Switch to dark mode
//         localStorage.setItem("darkMode", "enabled");
//         darkMode = "enabled";
//         applyTheme();
//     }
// }

// function openMenu() {
//     if(menuOpen) {
//         console.log("Menu closed");
        
//         menu.style.display = "none";
//         menuOpen = false;
//     }
//     else {
//         console.log("Menu opened");
        
//         menu.style.display = "flex";
//         menuOpen = true;
//     }
// }






