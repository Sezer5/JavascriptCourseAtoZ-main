console.log('Deneme string ifadeler');
console.log("Deneme string ifadeler");

let email="unalmissezer@gmail.com";

console.log(email);

// String İfadeleri Birleştirme

let a="Sezer";
let b="Unalmis";
let c=a + " " + b;

console.log(c);

// Karakterleri çekme işlemi

console.log(c[0]);
console.log(c[4]);

// Karakter Uzunluğu

console.log(c.length);

if(c.length > 0){
    console.log("Veri Var");
}else{
    console.log("Veri Yok");
}

// Metodlar

console.log(c.toUpperCase());
console.log(c);
console.log(c.toLowerCase());
console.log(c.toLocaleLowerCase());

let index=c.indexOf(' '); // Karakterin bulunduğu indexi gösterir

console.log(index);