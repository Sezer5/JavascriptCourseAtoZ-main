const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    if(request.readyState === 4 && request.status === 200){ // API'den gelen isteğin bitmesi anlamında 4 kullanılıyor
        console.log(request.responseText);
    }else if(request.readyState === 4){
        console.log('başarılı cevap alınamadı');
    }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();

