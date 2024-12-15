const variable = [
    {hobby: "Swimming" , person: "Sezer"},
    {hobby: "Reading" , person: "Seda"},
    {hobby: "Cooking" , person: "Kevser"},
    {hobby: "Football" , person: "Cahit"}
];

console.log(JSON.stringify(variable));

localStorage.setItem('todos',JSON.stringify(variable));

const storedData = localStorage.getItem('todos');

console.log(JSON.parse(storedData));