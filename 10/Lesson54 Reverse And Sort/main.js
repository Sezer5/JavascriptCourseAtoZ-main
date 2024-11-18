const names = ['name1','name2','name3','name4','name5'];
names.sort();
names.reverse();
console.log(names);

const points = [70,75,25,35,10,80,27,3];

points.sort();
points.reverse();
points.sort((a,b) => b-a);
console.log(points);

points.sort((a,b) => a-b);
console.log(points);


const students = [

    {name:'sezer' , point: 40 },
    {name:'seda' , point: 60 },
    {name:'kevser' , point: 30 },
    {name:'cahit' , point: 100 },
];


// students.sort((a,b)=>{
//     if(a.point > b.point){
//         return -1;
//     }else if(b.point > a.point){
//         return 1;
//     }else{
//         return 0;
//     }

// });

students.sort((a,b) => b.point - a.point)

console.log(students);
