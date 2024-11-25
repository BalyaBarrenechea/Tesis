document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const generalError = document.getElementById('generalError');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Reset error messages
        usernameError.style.display = 'none';
        passwordError.style.display = 'none';
        generalError.style.display = 'none';

        let hasError = false;

        // Validacion username
        if (!usernameInput.value) {
            usernameError.textContent = 'Completa este campo.';
            usernameError.style.display = 'block';
            hasError = true;
        }

        // Validacion password
        if (!passwordInput.value) {
            passwordError.textContent = 'Completa este campo.';
            passwordError.style.display = 'block';
            hasError = true;
        }

        if (hasError) return;

        // Llama a la API de la BDD 
        try {
            const response = await fetch('https://tu-backend-api.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: usernameInput.value,
                    password: passwordInput.value,
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                alert('Inicio de sesión exitoso.');
                window.location.href = 'socio.html'; // Cambiar por la ruta de tu página principal
            } else {
                generalError.textContent = result.message || 'Usuario o contraseña incorrectos. Vuelva a intentarlo.';
                generalError.style.display = 'block';
            }
        } catch (error) {
            console.error('Error al conectar con la base de datos:', error);
            generalError.textContent = 'Usuario o contraseña incorrectos. Vuelva a intentarlo.';
            generalError.style.display = 'block';
        }
    });

    // Remueve mensajes de error con clicks
    const clearErrors = () => {
        usernameError.style.display = 'none';
        passwordError.style.display = 'none';
        generalError.style.display = 'none';
    };

    usernameInput.addEventListener('focus', clearErrors);
    passwordInput.addEventListener('focus', clearErrors);
});
