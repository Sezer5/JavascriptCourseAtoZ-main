const calculatorTitle = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const resetButton = document.querySelector('#resetButton');

let initialValue = 0;
let operatorValue = '';
let isWaiting = false;

function sendNumberValue(number){
    // calculatorTitle.textContent = number;

    if(isWaiting){
        calculatorTitle.textContent = number;
        isWaiting = false;
    }else{
        const displayValue = calculatorTitle.textContent;
    calculatorTitle.textContent = displayValue === '0' ? number : displayValue+number;
    }

    
}

function resetAll(){
    calculatorTitle.textContent = '0';
    initialValue = 0;
    operatorValue = '';
    isWaiting = false;
}

function addDecimal(){
    if(!calculatorTitle.textContent.includes('.')){
        calculatorTitle.textContent = `${calculatorTitle.textContent}.`
    }
}

function userOperator(operator){
    const currentValue = Number(calculatorTitle.textContent);


    if(operatorValue && isWaiting){
        operatorValue = operator;
        return;
    }

    if(!initialValue){
        initialValue = currentValue;
    }else{
        const calculation = calc[operatorValue](initialValue,currentValue)

        calculatorTitle.textContent = calculation;
        initialValue = calculation;
    }

    isWaiting = true;
    operatorValue = operator;
}

const calc = {
    '/':(firstNumber,secondNumber)=>firstNumber/secondNumber,
    '*':(firstNumber,secondNumber)=>firstNumber*secondNumber,
    '+':(firstNumber,secondNumber)=>firstNumber+secondNumber,
    '-':(firstNumber,secondNumber)=>firstNumber-secondNumber,
    '=':(firstNumber,secondNumber)=>secondNumber,
}


resetButton.addEventListener('click',resetAll);

buttons.forEach((button)=>{
    if(button.classList.length === 0){
        button.addEventListener('click',()=>sendNumberValue(button.value));
    }
    else if (button.classList.contains('operator')){
        button.addEventListener('click',()=>userOperator(button.value));
    }
    else if (button.classList.contains('decimal')){
        button.addEventListener('click',()=>addDecimal());
    }
})