const yas = 20;

if(yas>18){
    console.log("Önerme Doğrudur");
}

const adSoyad=['sezer','seda','kevser','cahit'];

if(adSoyad.length>4){
    console.log("Aile burada");
}else{
    console.log("Eksik var :(");
}

let sifre="ab34??**";

if(sifre.length>=12){
    console.log("Şifre Güçlü")
}else if (sifre.length>=6 && sifre.length<=11){
    console.log("Şifre İyi");
}else{
    "Şifre Zayıf";
}