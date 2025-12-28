function calculateAge() {
    // Element to display today's date
    const CurrentDate = document.getElementById("CurrentDate");

    // Element to display the result
    const result = document.getElementById("Result");

    // Get the user's date of birth from the input field
    const DOBinput = document.getElementById("dob").value;

    // If no date is entered, show a message and stop
    if (!DOBinput) {
        result.textContent = "Please enter your date of birth.";
        return;
    }

    // Split the DOB string "YYYY-MM-DD" into parts
    const parts = DOBinput.split("-");

    // Convert each part into a number
    let yy = Number(parts[0]);
    let mm = Number(parts[1]);
    let dd = Number(parts[2]);

    // Get the current date using Luxon
    const now = luxon.DateTime.now();

    const currentYear = now.year;
    const currentMonth = now.month;
    const currentDay = now.day;

    // Initial age based on year difference
    let age = currentYear - yy;

    // If birthday hasn't happened yet this year, subtract 1
    if (currentMonth < mm || (currentMonth === mm && currentDay < dd)) {
        age = age - 1;
    }

    // Display the result and today's date
    result.textContent = `You are ${age} years old.`;
    CurrentDate.textContent = `Today's Date: ${currentYear} - ${currentMonth} - ${currentDay}`;
}

calculateAge();
