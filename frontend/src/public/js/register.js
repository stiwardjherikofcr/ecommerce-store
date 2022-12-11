const BASE_URL = `http://localhost:3000/api/v1/auth/`;
const form_register = document.getElementById('form_register');
const inputs = document.querySelectorAll('#form_register input');
let file;

form_register.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData();
    inputs.forEach((input) => {
        data.append(input.name, input.value);
    });
    data.append('image', file);
    fetch(`${BASE_URL}signup`, {
        method: 'POST',
        body: data,
    })
    .then((res) => res.json())
    .then((data) => location.href = '/auth/login')
    .catch((err) => console.log(err));
});

function previewImage(event) {
    file = event.target.files[0];
    const preview = document.querySelector('img');
    const reader = new FileReader();
    reader.addEventListener('load', function () {
        preview.src = reader.result;
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    }
}