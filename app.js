document.addEventListener('DOMContentLoaded', function() {
    const netlifyIdentity = window.netlifyIdentity;

    // Inicializar Netlify Identity
    netlifyIdentity.init();

    // Función para abrir el modal de inicio de sesión
    function openLoginModal() {
        netlifyIdentity.open('login');
    }

    // Función para abrir el modal de registro
    function openSignupModal() {
        netlifyIdentity.open('signup');
    }

    // Manejar eventos de inicio de sesión
    netlifyIdentity.on('login', (user) => {
        // Ocultar botones de autenticación
        document.getElementById('authButtons').style.display = 'none';

        // Mostrar mensaje de bienvenida
        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.style.display = 'block';

        // Lanzar efectos de fuegos artificiales
        launchFireworks();
    });

    // Función para lanzar efectos de fuegos artificiales
    function launchFireworks() {
        const fireworksCanvas = document.getElementById('fireworksCanvas');
        const ctx = fireworksCanvas.getContext('2d');

        // Lógica para los efectos de fuegos artificiales
        // Aquí puedes implementar la animación de fuegos artificiales
        // Por simplicidad, se puede usar una biblioteca como fireworks.js
        // https://github.com/bubblin/The-Big-Fat-Fireworks
    });
});
