const sifre = '1234!abdcadawda1' ;

// && ve işareti , || veya işareti

if(sifre.length>= 12 && sifre.includes('!')){
    console.log('Sifre baya güçlü');
}else if(sifre.length>=8){
    console.log('Şifre fena değil');
}


const control = false;

if(!control){
    console.log('Kontrol başarılı')
}