
let ogrenci = {
    ad : 'Sezer',
    yas : '29',
    email : 'deneme@deneme',
    sinif : '12',
    dersler : ['matematik','fizik','kimya'],
    login()
    {
        console.log('Öğrenci giriş yaptı');
    },
    logout()
    {
        console.log('Öğrenci çıkış  yaptı');
    },
    printLessons(){
        console.log(this.dersler);
        console.log(this);
        
        this.dersler.forEach(ders=>{
            console.log(ders);
        })
    }
};

console.log(this);
ogrenci.printLessons();
ogrenci.login();
ogrenci.logout();

// Objeler içinde kullanılan fonksiyonlarda arrow function'lar kullanılamaz