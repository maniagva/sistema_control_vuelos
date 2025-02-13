document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.querySelector('.back-to-top');

    // Función para cambiar de sección
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
    }

    // Manejar clic en navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Manejar scroll para botón "volver arriba"
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('show', window.scrollY > 300);
    });

    // Botón volver arriba
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Manejar login
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if(username && password.length >= 8) {
            showSection('dashboard');
        }
    });

    // Mostrar sección inicial
    showSection('login');
});