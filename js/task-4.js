const formEl = document.querySelector('.login-form');

const mailEl = document.querySelector('input[name=email]');
const passwordEl = document.querySelector('input[name=password]');

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = event.target;
    const userMail = formData.elements.email.value.trim();
    const userPassword = formData.elements.password.value.trim();
    if (userMail === '' || userPassword === '') {
        alert('All form fields must be filled in');
        return;
    }
console.log(`email: ${userMail}\npassword:${userPassword}`);
     formEl.reset(); 
});
    