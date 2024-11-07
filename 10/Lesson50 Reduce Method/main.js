const points = [70,75,25,35,10,80,27];

const result = points.reduce((value,point)=>{
    if(point>50){
        value++;
    };
    return value;
},0);

console.log(result);

const students = [

    {name:'sezer' , point: 40 },
    {name:'seda' , point: 60 },
    {name:'kevser' , point: 30 },
    {name:'cahit' , point: 100 },
    {name:'sezer' , point: 80 },
    {name:'kevser' , point: 50 },

];

const sezerTotal = students.reduce((value,student)=>{
    if(student.name == "sezer"){
        value+=student.point;
    };
    return value;
},0);

console.log(sezerTotal);