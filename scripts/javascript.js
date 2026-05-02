// Light/Dark Mode Toggle
// Wait for the HTML to load completely
document.addEventListener('DOMContentLoaded', function() {

    // Get references to both theme toggle buttons
    const lightModeBtn = document.getElementById('theme-toggle-light');
    const darkModeBtn = document.getElementById('theme-toggle-dark');

    // Check if user previously had a preference saved in localStorage
    const savedTheme = localStorage.getItem('theme');


    // Get all social icons that need to be swapped
    const socialIcons = document.querySelectorAll('.social-icon');

    // Function to update icons based on theme
    function updateIcons(theme) {
        socialIcons.forEach(icon => {
            const newSrc = theme === 'dark'
            ? icon.getAttribute('data-dark-src')
            : icon.getAttribute('data-light-src');

            if (newSrc) {
                icon.src = newSrc;
            }
        });
    }


    // If there's a saved preference, apply it
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateIcons('dark'); 
    } else if (savedTheme === 'light') {
            document.body.classList.remove('dark-mode');
            updateIcons('light');
        }
    

    // Function to switch to Light Mode
    function setLightMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme','light');
        updateIcons('light');
    }

    // Function to switch to Dark Mode
    function setDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        updateIcons('dark');
    }

    // Add event listeners to buttons
    if (lightModeBtn) {
        lightModeBtn.addEventListener('click', setLightMode);
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', setDarkMode);
    }

    // Back to top button - Show on scroll 
    const backToTopBtn = document.querySelector('.back-to-top');

    function checkScroll() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
    
    function scrollToTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    if (backToTopBtn) {
        window.addEventListener('scroll', checkScroll);
        backToTopBtn.addEventListener('click', scrollToTop);
        checkScroll();
    }

});