

const getTodos = (resource) => {

    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){ // API'den gelen isteğin bitmesi anlamında 4 kullanılıyor
            // console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            resolve(data);
            // callback(undefined,data);
        }else if(request.readyState === 4){
            reject("Başarılı Cevap Alınamadı");
            // console.log('başarılı cevap alınamadı');
            // callback('Başarılı Cevap Alınamadı',undefined);
        }
    });
    
    request.open('GET',resource);
    request.send();
    })
    
}

getTodos('example1.json').then(data => {
    console.log(data);
}).catch((err) => {
    console.log(err)
})

// const getIt = () => {
//     return new Promise((resolve,reject) => {
//         resolve("Başarılı Data");
//         //reject("Başarısız Data");
//     })
// };

// getIt().then((data) => {
//     console.log("Başarılı",data);
// },(err) => {
//     console.log("Başarısız ",err);
// });

// getIt().then(
//     (data) => {
//     console.log("Başarılı",data);
// }).catch((err) => {
//     console.log("Error Data", err)
// })


