

const getTodos = (resource) => {

    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){ // API'den gelen isteğin bitmesi anlamında 4 kullanılıyor

            const data = JSON.parse(request.responseText);
            resolve(data);

        }else if(request.readyState === 4){
            reject("Başarılı Cevap Alınamadı");
            
        }
    });
    
    request.open('GET',resource);
    request.send();
    })
    
}

getTodos('example1.json').then(data => {
    console.log("Promise 1:",data);
    return getTodos('example2.json');
}).then(data => {
    console.log("Promise 2:",data);
    return getTodos('example3.json');
}).then(data => {
    console.log("Promise 3:",data);
    // return getTodos('example3.json');
}).catch((err) => {
    console.log(err)
})



