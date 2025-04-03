let missionTab = document.getElementById("mission-tab");
let historyTab = document.getElementById("history-tab");
let coreValuesTab = document.getElementById("core-values-tab");


let missionCards = document.getElementById("mission-vision-cards");
let historyCards = document.getElementById("history-cards");
let coreValueCards = document.getElementById("core-values-cards");


function switchTab(newTab, newCards) {
    let activeTab = document.querySelector(".tab.active");
    let activeCards = document.querySelector(".tab-content-area > div:not(.hidden)");

    if (activeTab !== newTab) {
        console.log(`${newTab.id} clicked`);

        // Remove active class from current tab
        activeTab.classList.remove("active");

        // Animate old content out
        activeCards.style.opacity = "0";
        activeCards.style.transform = "translateY(10px)";

        setTimeout(() => {
            activeCards.classList.add("hidden");

            // Show new content
            newCards.classList.remove("hidden");
            newTab.classList.add("active");

            // Animate new content in
            setTimeout(() => {
                newCards.style.opacity = "1";
                newCards.style.transform = "translateY(0)";
            }, 50);
        }, 300);
    }
}

missionTab.addEventListener("click", () => switchTab(missionTab, missionCards));
historyTab.addEventListener("click", () => switchTab(historyTab, historyCards));
coreValuesTab.addEventListener("click", () => switchTab(coreValuesTab, coreValueCards));