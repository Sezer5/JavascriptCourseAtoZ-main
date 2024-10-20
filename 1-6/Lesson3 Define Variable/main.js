// alert('Hello World');
// console.log('Hello World');
// console.log(15);
// var x=5;
// var y=7;
// console.log(x+y);

// Javascripte 3 tip değişken tanımlama yönetim var 
// Let değiştirilebilir const değiştirilemez

let gun=14;
let ay=7;
let yil=1990;

console.log(gun,ay,yil);
console.log(ay);
console.log(yil);

console.log("Sezer "+gun+"/"+ay+"/"+yil+" Tarihinde doğmamıştır");

gun=28;
ay=3;
yil=1990;
console.log("Sezer "+gun+"/"+ay+"/"+yil+" Tarihinde doğmuştur");

const a=3;
console.log(a);
var arabafiyati =130000;
console.log(arabafiyati);

a=2;

console.log(a);

// Uncaught TypeError: Assignment to constant variable.at main.js:29:2 şeklinde bir hata verir const ifadeler sonradan değiştirilemez

var arabafiyati =130000;
console.log(arabafiyati);

// Yukarıda bir hata aldığından hemen yukarıdaki kodu okumadı 

// Javascriptte herhangi bir yerde hata aldığı zaman orada çalışmayı durdurur

/* Çoklu yorum satırına alma işlemi böyle yapılmaktadır 
 Çoklu yorum satırına alma işlemi böyle yapılmaktadır 
 Çoklu yorum satırına alma işlemi böyle yapılmaktadır */