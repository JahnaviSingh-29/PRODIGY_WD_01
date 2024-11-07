// Add scroll event listener to the window
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    // Adds the 'scrolled' class if scrolled past 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});