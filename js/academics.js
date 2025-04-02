console.log("Academics js loaded");

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const table = document.querySelector(".teachers-table table");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    const nameHeader = document.querySelector(".sortable");
    let isAscending = true;

    // Search Functionality
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        rows.forEach((row) => {
            console.log("this finna be a row");
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? "" : "none";
        });
    });

    nameHeader.addEventListener("click", () => {
        console.log("clicked sorting thingy");
        const columnIndex = 0;
        const sortedRows = rows.sort((a, b) => {
            
            const aValue = String(a.cells[columnIndex].textContent).trim().toLowerCase();
            const bValue = String(b.cells[columnIndex].textContent).trim().toLowerCase();
            
            // Compare alphabetically
            return isAscending 
                ? aValue.localeCompare(bValue, { sensitivity: 'base' })
                : bValue.localeCompare(aValue, { sensitivity: 'base' });
        });

        
        isAscending = !isAscending;
        nameHeader.textContent = `Name ${isAscending ? "↑" : "↓"}`;

        // Rebuild table body
        sortedRows.forEach((row) => tbody.appendChild(row));
    });
});