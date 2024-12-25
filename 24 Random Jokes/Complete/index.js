const jokeButton = document.getElementById('jokeButton');
const joke = document.getElementById('joke');

const apiKey = 'rmEr6gV64xz0iLfCb0V0DA==pQcFUTtoofaA7FZq';
const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes';

const options = {
    method : 'GET',
    headers :{
        'X-Api-Key':apiKey,
    }
}

async function getJoke(){
    try {
        joke.textContent = 'Updating...';
        jokeButton.disabled = true;
        const response = await  fetch(apiUrl,options) ;
        const data = await response.json();
        joke.textContent = data[0].joke;
        jokeButton.disabled = false;
    } catch (error) {
        joke.textContent = "Try Again Later";
    }
    
}

jokeButton.addEventListener('click',getJoke);