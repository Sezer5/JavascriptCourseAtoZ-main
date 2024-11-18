const points = [70,75,25,35,10,80,27];

const studentsPassed = points.filter(point =>{
    return point > 50;
});

const studentsPassed2 = points.filter(point => point > 50);

console.log(studentsPassed);
console.log(studentsPassed2);

const students = [
    {name: 'sezer' , passed:true},
    {name: 'seda' , passed:false},
    {name: 'kevser' , passed:true},
    {name: 'cahit' , passed:false},
];

const studentSuccess = students.filter(student=>{
    return !student.passed;
});

console.log(studentSuccess);