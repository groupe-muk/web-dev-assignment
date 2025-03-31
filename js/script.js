
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







const daysContainer = document.querySelector(".days"),
nextBtn = document.querySelector(".next-btn"),
prevBtn = document.querySelector(".prev-btn"),
todayBtn = document.querySelector(".today-btn"),
month = document.querySelector(".month"),
eventDetails = document.querySelector(".event-details");


const months = [

    "January" ,
    "February" ,
    "March" ,
    "April" ,
    "May" ,
    "June" ,
    "July" ,
    "August" ,
    "September" ,
    "October" ,
    "November" ,
    "December"

];


const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    

const date = new Date();

let currentMonth = date.getMonth();

let currentYear = date.getFullYear();

const events = {
    "2025-04-05": ["Science Fair"],
    "2025-04-10": ["Sports Day"],
    "2025-04-15": ["Parent-Teacher Meeting"],
    "2025-04-20": ["Mid-Term Exams Begin"],
    "2025-03-30": ["Visitation Day"]
};



function renderCalendar(){

    //get prevoius month, current month and next month days
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1;

    //update current month and year in header

    month.innerHTML = `${months[currentMonth]} ${currentYear}`;

    //update days html

    let days = "";

    //prev month days html
    for(let x = firstDay.getDay(); x > 0; x--){

        days += `<div class = "day prev"> ${prevLastDayDate - x + 1} </div>`
    }

    //current month days

    for(let i = 1; i <= lastDayDate; i++){

        let eventDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        let eventDot = events[eventDate] ? `<span class="event-dot"></span>` : "";

        // check if it's today, then add today's class
        if(
            i === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ){
            //if date month year matches add today
            days += `<div class = "day today" data-date="${eventDate}">${i} <div class = "event-dots"></div> ${eventDot}</div>`
        }
        else{
            //else, don't add today
            days += `<div class = "day" data-date="${eventDate}">${i} <div class = "event-dots"></div> ${eventDot}</div>`

        }
    }

    //next month days
    for(let j = 1; j <= nextDays; j++){

        days += `<div class = "day next">${j}</div>`

    }

    daysContainer.innerHTML = days;

}

renderCalendar();

nextBtn.addEventListener("click", () => {
    //increase current month by one
    currentMonth++;
    if(currentMonth > 11){
        //if month gets greater than 11, make it zero and increase year by one
        currentMonth = 0;
        currentYear++;
    }
    //rerender calendar
    renderCalendar();

});

prevBtn.addEventListener("click", () => {
    //reduce current month by one
    currentMonth--;
    if(currentMonth < 0){
        //if month gets less than 1, make it 11 and reduce year by one
        currentMonth = 11;
        currentYear--;
    }
    //rerender calendar
    renderCalendar();

}); 

todayBtn.addEventListener("click", () => {
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    //rerender calendar
    renderCalendar();

}); 

daysContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("day") || e.target.classList.contains("event-dot")) {
        let selectedDate = e.target.dataset.date || e.target.parentElement.dataset.date;
        if (events[selectedDate]) {
            eventDetails.innerHTML = `<ul>${events[selectedDate].map(events => `<li>${events}</li>`).join("")}</ul>`;
        }
        else{

            eventDetails.innerHTML = `<p> There are no events on this day. </p>`
        }
    }
});

