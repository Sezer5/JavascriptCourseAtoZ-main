const remainingDiv = document.getElementById('remainingDiv');
const timeDiv = document.getElementById('timeDiv');
const timeSpans = document.querySelectorAll('span');
const remainingForm = document.getElementById('remainingForm');
const resetButton = document.getElementById('resetButton');
const completeButton = document.getElementById('completeButton');
const completeDiv = document.getElementById('complete');
const dateInput = document.getElementById('date-picker');

let chosenDate = '';
let currentDateValue = new Date().getTime();
let currentTimeInterval;

let localStorageTime;

const second = 1000;
const minute = second*60;

const hour = minute*60;

const day = hour*24;

const today = new Date().toISOString().split('T')[0];

dateInput.setAttribute('min',today);

function updateDom(){
    currentTimeInterval = setInterval(()=>{
        const now = new Date().getTime();
        const betweenDate = currentDateValue-now;
        // console.log(betweenDate);
        const days = Math.floor(betweenDate/day); 
        const hours = Math.floor((betweenDate % day)/hour); 
        const minutes = Math.floor((betweenDate % hour)/minute); 
        const seconds = Math.floor((betweenDate % minute)/second); 

        console.log(days,hours,minutes,seconds);
        remainingDiv.hidden = true;

        if(betweenDate < 0){

            timeDiv.hidden = true;

            clearInterval(currentTimeInterval);

            completeDiv.hidden = false;
            
            
        }else{

            
            timeDiv.hidden = false;
    
    
            timeSpans[0].textContent = `${days}`;
            timeSpans[1].textContent = `${hours}`;
            timeSpans[2].textContent = `${minutes}`;
            timeSpans[3].textContent = `${seconds}`;
        }


       
    },1000)
    
}

function calculateTime(e){
    e.preventDefault();
    chosenDate = remainingForm.date.value;
    localStorageTime = {
        date:chosenDate,
    };
    localStorage.setItem('time',JSON.stringify(localStorageTime));
    if(chosenDate == ''){
        alert('Lütfen Geçerli Bir Tarih Seçiniz!');
    }else{
        currentDateValue = new Date(chosenDate).getTime();
        updateDom();
    }
}

function reset(){
    clearInterval(currentTimeInterval);
    remainingDiv.hidden = false;
    completeDiv.hidden = true;
    timeDiv.hidden = true;
    localStorage.removeItem('time');
}

function refleshTime(){
    if(localStorage.getItem('time')){
        localStorageTime = JSON.parse(localStorage.getItem('time'));
        chosenDate = localStorageTime.date;
        currentDateValue = new Date(chosenDate).getTime();
        remainingDiv.hidden = true;
        updateDom();
    }
}

remainingForm.addEventListener('submit',calculateTime);


resetButton.addEventListener('click',reset);

completeButton.addEventListener('click',reset);

refleshTime();