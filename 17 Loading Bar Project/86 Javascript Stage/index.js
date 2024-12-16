const counter = document.querySelector('.counter');
const LoadingBarFront = document.querySelector('.loadingBarFront');

let  number = 0;


updateNumber();

function updateNumber(){

    counter.textContent = number + '%';
    LoadingBarFront.style.width = number + '%';

    number++;

    if(number < 101){
        setTimeout(updateNumber,15)
    }

}