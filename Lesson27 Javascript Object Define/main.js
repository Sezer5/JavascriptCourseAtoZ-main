let ogrenci = {
    ad : 'Sezer',
    yas : '29',
    email : 'deneme@deneme',
    sinif : '12',
    dersler : ['matematik','fizik','kimya']
};

console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas=20;

console.log(ogrenci.yas);
console.log(ogrenci['yas']);

ogrenci['ad']='Hakan';
console.log(ogrenci['ad']);

console.log(typeof ogrenci);