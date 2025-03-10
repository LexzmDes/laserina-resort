const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

// Populate day dropdown (1-31)
for (let i = 1; i <= 31; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    daySelect.appendChild(option);
}

// Populate month dropdown (January - December)
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
months.forEach((month, index) => {
    let option = document.createElement("option");
    option.value = index + 1;
    option.text = month;
    monthSelect.appendChild(option);
});

// Populate year dropdown (1900 - current year)
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1900; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}

