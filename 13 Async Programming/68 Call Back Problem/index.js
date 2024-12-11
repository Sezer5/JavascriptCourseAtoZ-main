const getTodos = (resource,callback)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        // console.log(request);
        // console.log(request.readyState);
        if(request.readyState === 4 && request.status === 200){
            // console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            callback(undefined,data);
        }else if(request.readyState === 4){
            // console.log('Başarılı Cevap Alınamadı');
            callback('Başarılı Cevap Alınamadı',undefined);
        }
    })

    request.open('GET',resource);
    request.send();
}

console.log(1);
console.log(2);

getTodos('example1.json',(err,data)=>{
   
        console.log(data);
        getTodos('example2.json',(err,data)=>{
   
            
    });
    console.log(data);
            getTodos('example2.json',(err,data)=>{
   
                console.log(data);
        }); 
});

console.log(3);
console.log(4);