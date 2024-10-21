const username = 'sezers';

const pattern = /^[a-z]{6,10}$/;

let sonuc = pattern.test(username);

console.log(sonuc);

if(sonuc){
    console.log('Başarılı');
}else{
    console.log('Başarısız');
}

let sonuc2 = username.search(pattern);
console.log(sonuc2);

// 0 dönerse başarılı -1 dönerse başarısız