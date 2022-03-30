// Dad jokes API 
const API = 'https://icanhazdadjoke.com';

let joke = document.querySelector('#joke'); // p tag to be populated with joke
let button = document.querySelector('#submit');

// Options to pass in the fetch method
let options = {
    method:'GET',
    headers: {
        Accept:"application/json"
    }
}

// Async Function
const getDadJoke = async ()=>{
    
    const response = await fetch(API, options)

    const data = await response.json();

    joke.innerHTML = '';
    joke.innerHTML = data.joke;
}




button.addEventListener('click', getDadJoke)