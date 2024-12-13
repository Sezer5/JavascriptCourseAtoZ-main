const getTodos = async () =>{ // async bir fonksiyon geriye her zaman bir promise döndürür

   let response = await fetch('example1.json');

   if(response.status !== 200){
    throw new Error("Doğru endpointe istek atmadınız");
   }

   const data = await response.json();
   return data;



}
getTodos().then(response => {
        console.log(response);
    }).catch(err=>{
            console.log(err.message);
        });
//console.log(getTodos());

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch('example1.json')
// .then(response => {
//     return response.json();
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })