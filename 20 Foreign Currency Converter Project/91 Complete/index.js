// Your API Key: 6dafece7fa46538dfc6d5558
// Example Request: https://v6.exchangerate-api.com/v6/6dafece7fa46538dfc6d5558/latest/USD

const currencyFirst = document.querySelector('#currencyFirst');
const currencySecond = document.querySelector('#currencySecond');
const count = document.querySelector('#count');
const equal = document.querySelector('#equal');
const exchangeRate = document.querySelector('#exchangeRate');

updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/6dafece7fa46538dfc6d5558/latest/${currencyFirst.value}`).then((res)=>res.json()).then((data)=>{
        console.log(data);
        const rate = data.conversion_rates[currencySecond.value];

        exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`
        equal.textContent = (count.value * rate).toFixed(2);  
    });
}


currencyFirst.addEventListener('change',updateRate);
currencySecond.addEventListener('change',updateRate);
count.addEventListener('input',updateRate);
