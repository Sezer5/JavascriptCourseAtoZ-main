const ogrenciler = ['sezer','seda','ishak','sevinç'];

const uletiketi=document.querySelector('.main');

let html = ``;

ogrenciler.forEach(ogrenci => {
    html += `<li>${ogrenci}</li>`
});

console.log(html);

uletiketi.innerHTML=html;