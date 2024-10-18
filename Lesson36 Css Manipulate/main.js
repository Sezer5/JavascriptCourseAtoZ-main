const icerik = document.querySelector('p');
icerik.classList.add('can');
icerik.classList.remove('error');
console.log(icerik.classList);

const paragraflar = document.querySelectorAll('p');

paragraflar.forEach(deneme =>{

    if(deneme.textContent.includes('error')){
        deneme.classList.add('error');
    }

    if(deneme.textContent.includes('success')){
        deneme.classList.add('success');
    }

})

