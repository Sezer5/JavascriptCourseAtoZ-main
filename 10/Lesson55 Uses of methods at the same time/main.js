const students = [
    {name:'sezer' , point: 40 },
    {name:'seda' , point: 60 },
    {name:'kevser' , point: 30 },
    {name:'cahit' , point: 100 },
    {name:'emel' , point: 45 },
    {name:'sacit' , point: 70 },
];

const filtered = students.filter(student => student.point < 50);

const plusPoint = filtered.map(student=>{

    return `${student.name} adlı öğrencinin yeni notu ${student.point + 15}`;
});

console.log(plusPoint);

const newNotes = students.filter(student => student.point < 50).map(student=> `${student.name} adlı öğrencinin yeni notu ${student.point + 15}`);

console.log(newNotes);

