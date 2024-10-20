const form = document.querySelector('.signupForm');
const username = document.querySelector('#username');
form.addEventListener('submit',e=>{
    e.preventDefault();
    // console.log(username.value);
    // console.log('Form Gönderildi');
    console.log(form.username.value);
});