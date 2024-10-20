let ogrenciler = ['sezer','seda','ishak','sevinç'];

ogrenciler.forEach(function(){
    console.log("Selam");
})

ogrenciler.forEach(function(kisi,index){
    console.log(kisi,index);
})

const ogrenci = (kisi,index)=>{
    console.log(`${index} - ${kisi}`);
}

ogrenciler.forEach(ogrenci);