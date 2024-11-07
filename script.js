// Login validation
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        window.location.href = 'menu.html';
    } else {
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});

// Load album content based on the selected type
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const albumTitle = document.getElementById('album-title');
    albumTitle.textContent = type === 'photos' ? 'Álbum de Fotos' : 'Álbum de Videos';
});

// Upload and display content
function uploadContent() {
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery');
    const file = fileInput.files[0];

    if (file) {
        const fileURL = URL.createObjectURL(file);
        const element = file.type.startsWith('image') ? document.createElement('img') : document.createElement('video');
        element.src = fileURL;
        if (element.tagName === 'VIDEO') element.controls = true;
        gallery.appendChild(element);
        fileInput.value = '';
    }
}
function goBackToMenu() {
    window.location.href = 'menu.html';
}
function logout() {
    // Redirige a la página de inicio de sesión
    window.location.href = 'index.html';
}
