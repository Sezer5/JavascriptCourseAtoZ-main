

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){ // API'den gelen isteğin bitmesi anlamında 4 kullanılıyor
            // console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            callback(undefined,data);
        }else if(request.readyState === 4){
            // console.log('başarılı cevap alınamadı');
            callback('Başarılı Cevap Alınamadı',undefined);
        }
    });
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos');
    request.send();
}

getTodos((err,data)=>{
    // console.log(err,data);
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});


