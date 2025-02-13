document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const backToTopButtons = document.querySelectorAll('.back-to-top');
    const backToLoginButtons = document.querySelectorAll('.back-to-login');
    const loginForm = document.querySelector('#login form');

    function showSection(id) {
        sections.forEach(section => {
            section.style.display = section.id === id ? 'block' : 'none';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    backToTopButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    backToLoginButtons.forEach(button => {
        button.addEventListener('click', function() {
            showSection('login');
        });
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        showSection('dashboard');
    });

    showSection('login');
});
