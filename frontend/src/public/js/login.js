const BASE_URL = `http://localhost:3000/api/v1/auth/`;
const form_login = document.getElementById('form_login');
const inputs = document.querySelectorAll('#form_login input');

form_login.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {};
    inputs.forEach((input) => {
        data[input.name] = input.value;
    });

    fetch(`${BASE_URL}signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.user) {
                localStorage.setItem('user', JSON.stringify(data.user));
                location.href = '/account/profile';
            }
        })
        .catch((err) => console.log(err));
});