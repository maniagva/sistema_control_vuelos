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
        backToTop.classList.toggle('show', window.scrollY > 140);
    });

    // Botón volver arriba
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        backToTop.blur();
    });

    // Manejar login
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if(username && password.length >= 8) {
            showSection('dashboard');
        } else {
            mostrarConfirmacion('Usuario o contraseña inválidos');
        }
    });

    // Mostrar sección inicial
    showSection('login');


    // Manejar formulario de vuelos
    document.getElementById('flightForm').addEventListener('submit', (e) => {
        e.preventDefault();
        mostrarConfirmacion('Vuelo agregado exitosamente');
    });

    // Manejar formulario de contraseña
    document.getElementById('passwordForm').addEventListener('submit', (e) => {
        e.preventDefault();
        mostrarConfirmacion('Contraseña actualizada correctamente');
    });

    // Manejar formulario de configuraciones
    document.getElementById('settingsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        mostrarConfirmacion('Configuraciones guardadas correctamente');
    });

    // Manejar formulario de creación de usuario
    document.getElementById('userForm').addEventListener('submit', (e) => {
        e.preventDefault();
        mostrarConfirmacion('Usuario creado exitosamente');
    });

    // Función de confirmación
    function mostrarConfirmacion(mensaje) {
        const modal = document.createElement('div');
        modal.className = 'confirmation-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <p>${mensaje}</p>
                <button class="btn-primary">Aceptar</button>
            </div>
        `;
        
        modal.querySelector('button').addEventListener('click', () => {
            modal.remove();
        });
        
        document.body.appendChild(modal);
    }
});