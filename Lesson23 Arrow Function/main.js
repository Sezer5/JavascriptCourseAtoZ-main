const kare_alani = kenar => kenar**2;


const sonuc = kare_alani(2);
console.log(sonuc);

const can = function(){
    return 'can';
}

const sonuc2=can();

console.log(sonuc2);

const can2 = () => 'Can';

const sonuc3=can2();
console.log(sonuc3);

// const fatura = function(urunler,vergi){
//     let toplam =0;
//     for (let i =0; i<urunler.length ; i++){
//         toplam += urunler[i]+urunler[i]*vergi;
//     }
//     return toplam;
// }

// console.log(fatura([10,20,30],0.25));

const fatura = (urunler,vergi)=>{
    let toplam =0;
    for (let i =0; i<urunler.length ; i++){
        toplam += urunler[i]+urunler[i]*vergi;
    }
    return toplam;
}
console.log(fatura([10,20,30],0.25));