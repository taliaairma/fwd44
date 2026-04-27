// Light/Dark Mode Toggle
// Wait for the HTML to load completely
document.addEventListener('DOMContentLoaded', function() {

    // Get references to both theme toggle buttons
    const lightModeBtn = document.getElementById('theme-toggle-light');
    const darkModeBtn = document.getElementById('theme-toggle-dark');

    // Check if user previously had a preference saved in localStorage
    const savedTheme = localStorage.getItem('theme');

    // If there's a saved preference, apply it
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode'); }
        else if (savedTheme === 'light') {
            document.body.classList.remove('dark-mode');
        }
    

    // Function to switch to Light Mode
    function setLightMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme','light');
    }

    // Function to switch to Dark Mode
    function setDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }

    // Add event listeners to buttons
    if (lightModeBtn) {
        lightModeBtn.addEventListener('click', setLightMode);
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', setDarkMode);
    }
});