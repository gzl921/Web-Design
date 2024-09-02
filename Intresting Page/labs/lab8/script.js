function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Get the toggle button by its ID
let toggleButton = document.getElementById('toggleButton');

// Set the function to run when the button is clicked
toggleButton.onclick = toggleTheme;