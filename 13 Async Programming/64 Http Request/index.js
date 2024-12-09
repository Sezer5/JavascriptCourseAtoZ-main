const request = new XMLHttpRequest();


request.addEventListener('readystatechange',()=>{
    // console.log(request);
    // console.log(request.readyState);
    if(request.readyState === 4){
        console.log(request.responseText);
    }
})

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();