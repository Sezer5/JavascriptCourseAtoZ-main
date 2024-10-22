const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');
const usernamePattern = /^[a-z]{6,10}$/;

form.addEventListener('submit', e=>{
    e.preventDefault();
    const username = form.username.value;
    

    if(usernamePattern.test(username)){
        message.textContent='Başarılı';
    }else{
        message.textContent = 'Lütfen Hepsi Küçük Harf ve 6 ile 10 Karakter arası seçim yapınız';
    }
})

form.username.addEventListener('keyup',e=>{
    // console.log(e.target.value);

    if(usernamePattern.test(e.target.value)){
        
        form.username.setAttribute('class','success');

    }else{
        form.username.setAttribute('class','error');
    }

})