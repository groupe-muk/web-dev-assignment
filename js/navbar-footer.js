// Include header and footer

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

    // Apply the saved theme on page load
    applyTheme();
});

// Load the footer
loadComponent("footer", footerPath);


