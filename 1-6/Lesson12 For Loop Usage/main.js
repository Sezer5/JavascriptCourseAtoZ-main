for(let i=0;i<10;i++){
    console.log(i);
}
console.log("Döngü bitti");

const adSoyad=['sezer','seda','kevser','cahit'];

for(let k=0;k<adSoyad.length;k++){
    // console.log(adSoyad[k]);
    let html=`<div>
        ${adSoyad[k]};
    </div>`
    console.log(html);
}