const points = [70,75,25,35,10,80,27]; 

const arrayIndex = points.findIndex(point => point == 35);

points[arrayIndex] = 45;

console.log(points);

// const arrayIndex = points.findIndex(point => point == 35);

// points[arrayIndex]=45;

// console.log(points);



const students = [

    {name:'sezer' , point: 40 },
    {name:'seda' , point: 60 },
    {name:'kevser' , point: 30 },
    {name:'cahit' , point: 100 },
];

const studenIndex = students.findIndex(student => student.name == 'sezer');

students[studenIndex].name = 'SEZER';

console.log(students);

// const objIndex = students.findIndex(student => student.name == 'kevser');

// students[objIndex].name = 'KEVSER';

// console.log(students);