import { Alert } from '../alerts.js';

const form = document.querySelector('#singup');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dataForm = Object.fromEntries(new FormData(e.target));

    if (dataForm.email.length === 0 || dataForm.username.length === 0 || dataForm.password.length === 0 || dataForm.repeetPassword.length === 0) {
        const alert = new Alert('w', 'Por favor, rellene todos los campos.');
        alert.showAlert();
        return;
    }

    if(dataForm.password !== dataForm.repeetPassword) {
        const alert = new Alert('w', 'Las contraseñas no coinciden.');
        alert.showAlert();
        return;
    }
    
    if(dataForm.password.length <= 6) {
        const alert = new Alert('w', 'La contraseña debe tener al menos 6 caracteres.');
        alert.showAlert();
        return;
    }

    const data = {
        email: dataForm.email,
        username: dataForm.username,
        password: dataForm.password,
        role: 3
    }

    const response = await fetch('/singup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    // Si el usuario o contraseña son incorrectos
    if(!result){
        const alert = new Alert('w', 'Ups algo ha ocurrido');
        alert.showAlert();
        return;
    }

    // Si el usuario y contraseña son correctos
    if(result) {
        const alert = new Alert('c', 'Registro exitoso, redirigiendo...');
        alert.showAlert();
        setTimeout(() => {
            window.location.href = `${window.location.origin}/`;
        }, 2500);
    }
});