const points = [70,75,25,35,10,80,27];

// const studentsPassed = points.filter(point =>{

//     return point > 50 ;
// });

const studentsPassed = points.filter(point => point > 50 );
console.log(studentsPassed);




const students = [

    {name:'sezer' , passed: false },
    {name:'seda' , passed: true },
    {name:'kevser' , passed: true },
    {name:'cahit' , passed: false },

]

const passingStudents = students.filter(student => {
    return !student.passed;
});

console.log(passingStudents);