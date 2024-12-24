function getEthiopianDate() {
    const date = new Date();
    let month = date.getMonth(); // 'month' is used, so no need to redeclare 'ethiopianYear' here.
    let ethiopianYear = date.getFullYear(); // Use 'let' for reassignment
    if (month < 7) {
        ethiopianYear = date.getFullYear() - 8; // Fixed the method call here
    } else {
        ethiopianYear = date.getFullYear() - 7; // Fixed the method call here
    }
    return `${ethiopianYear} ሺህ ዓመት`; // Returns the Ethiopian year in the correct format
}

function updateCalendar() {
    const ethiopianDate = getEthiopianDate();
    const gregorianDate = new Date().toLocaleDateString();

    document.getElementById("ethiopianDate").textContent = ethiopianDate;
    document.getElementById("gregorianDate").textContent = gregorianDate;
}

const eventInput = document.getElementById("eventInput");
const eventList = document.getElementById("eventList");
const addEventBtn = document.getElementById("addEvent");

let events = JSON.parse(localStorage.getItem("events")) || [];

function renderEvents() {
    eventList.innerHTML = "";
    events.forEach((event) => {
        const li = document.createElement("li");
        li.textContent = event;
        eventList.appendChild(li);
    });
}

addEventBtn.addEventListener("click", () => {
    const eventText = eventInput.value.trim();
    if (eventText) {
        events.push(eventText);
        localStorage.setItem("events", JSON.stringify(events));
        eventInput.value = "";
        renderEvents();
    }
});

const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

updateCalendar();
renderEvents();