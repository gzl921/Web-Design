//Header(title)

// Select the header title using its ID
const headerTitle = document.getElementById("headerTitle");

if (headerTitle) {
    // Original Chinese text
    const originalText = "Zilong(Chris) Guo's Personal Website";

    // English translation
    const translatedText = "郭子龙的个人网页";

    // Add mouseover event to change the text to English
    headerTitle.addEventListener("mouseover", function () {
        headerTitle.textContent = translatedText;
    });

    // Add mouseout event to change the text back to Chinese
    headerTitle.addEventListener("mouseout", function () {
        headerTitle.textContent = originalText;
    });
}


//page nevagate animation
document.addEventListener('DOMContentLoaded', (event) => {
    // Fade in the new page content
    document.body.classList.add('fade-in'); // Add the class to start the fade-in effect

    // After the initial fade-in, remove the class to start the fade-in transition
    window.setTimeout(() => {
        document.body.classList.remove('fade-in'); // Remove the class to transition to full opacity
    }, 100); // Short delay before fade-in starts

    // Listen for clicks on navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default navigation
            let destination = this.href; // Get the destination URL

            document.body.classList.add('fade-out'); // Start the fade-out animation

            // Wait for the fade-out animation to finish before navigating
            setTimeout(() => {
                window.location = destination;
            }, 500); // This timeout duration should match the CSS transition duration
        });
    });

    // Fade in the new page content
    if (document.body.classList.contains('fade-out')) {
        document.body.classList.remove('fade-out');
    }

});


//Time
const yearsElement = document.getElementById("years");
const monthsElement = document.getElementById("months");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const creationDate = new Date("2024-04-11"); // Change to your website's creation date

function updateDuration() {
    const currentDate = new Date();
    const totalSeconds = Math.floor((currentDate - creationDate) / 1000);

    const years = Math.floor(totalSeconds / (60 * 60 * 24 * 365.25));
    const months = Math.floor((totalSeconds % (60 * 60 * 24 * 365.25)) / (60 * 60 * 24 * 30));
    const days = Math.floor((totalSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    yearsElement.textContent = years;
    monthsElement.textContent = months;
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

// Call the updateDuration function every 1000 milliseconds (1 second)
updateDuration();
setInterval(updateDuration, 1000);



