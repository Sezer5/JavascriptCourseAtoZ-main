// const pdeger = document.querySelector('p');
// console.log(pdeger.innerText);
// pdeger.innerText = 'MErhaba';

const pdegeri = document.querySelectorAll('p');

pdegeri.forEach(a => {
    console.log(a.innerText);
    a.innerText += ' Yeni alan';    
});

const icerik = document.querySelector('.content');
console.log(icerik);

icerik.innerHTML += '<h2>Deneme Yazıları Eklemek İçin Herşey</h2>';

const ogrenciler = ['isim1','isim2','isim3'];

ogrenciler.forEach(ogrenci=>{
    icerik.innerHTML += ` <p>${ogrenci}</p>`;
});