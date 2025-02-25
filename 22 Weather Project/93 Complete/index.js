const celcius = document.getElementById('celcius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

function calculateTemp(event){
    
    const currentValue = Number(event.target.value);

    switch(event.target.name){

        case 'celcius':
            kelvin.value = (currentValue+273.32).toFixed(2);
            fahrenheit.value = (currentValue*1.8+32).toFixed(2);
            break;
        case 'fahrenheit':
            kelvin.value = ((currentValue-32)/1.8+273.32).toFixed(2);
            celcius.value = ((currentValue-32)/1.8).toFixed(2);
            break;
        case 'kelvin':
            celcius.value = (currentValue-273.32).toFixed(2);
            fahrenheit.value = (((currentValue-273.32)*1.8)+32).toFixed(2);
            break;
        default:
            break;
    }
}