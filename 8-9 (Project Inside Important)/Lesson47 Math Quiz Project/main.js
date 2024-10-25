const correctAnswers = ['8','10','3','25'];

const form = document.querySelector('.question-form');

const result = document.querySelector('.result');
const successMessage = document.querySelector('#successMessage');
const btn = document.querySelector('.btn');

form.addEventListener('submit',e=>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    if(score == 100){
        successMessage.classList.remove('d-none');
        btn.setAttribute('disabled','');
    }
    // console.log(score);

    result.classList.remove('d-none');
    let puan = 0;
    const bastir = setInterval(()=>{
        result.querySelector('#percentage').textContent = `${puan}%`;
        if(puan==score){
            clearInterval(bastir);
        }else{
            puan++
        };
    },10);

    

});

// setTimeout(()=>{
//     console.log('Sezer');
// },3000);
// let i = 0;
// const bastir = setInterval(()=>{
//     console.log('sezer');
//     i++;
//     if(i=4){
//         clearInterval(bastir);
//     }
// },1000);