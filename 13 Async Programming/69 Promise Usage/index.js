

const getTodos = (resource,callback) => {
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
    
    request.open('GET',resource);
    request.send();
}

getTodos('example1.json',(err,data)=>{
    // console.log(err,data);
        console.log(data);
        getTodos('example2.json',(err,data)=>{
            // console.log(err,data);
                console.log(data);
        });
        getTodos('example3.json',(err,data)=>{
            // console.log(err,data);
                console.log(data);
        });
});


