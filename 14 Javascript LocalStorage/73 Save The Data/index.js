localStorage.setItem('name','Sezer'); // LOCAL STORAGE'DE ITEMLER STRING OLARAK TUTULMAKTADIR.
localStorage.setItem('yas','34');

let ad = localStorage.getItem('name');
let age = localStorage.getItem('yas');
console.log(ad,age);

localStorage.setItem('name','Sezer Ünalmış');
localStorage.yas = '35';

ad = localStorage.getItem('name');
age = localStorage.getItem('yas');
console.log(ad,age);