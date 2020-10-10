

// Constants and variables
const API_KEY = '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

// Cached Element References

// Event listeners

// Functions

function handleGetData() {
    $.ajax(BASE_URL + 'q=Dallas&appid=' + API_KEY)
    .then(function(data) {
        console.log('Data: ', data)
    }, function(error) {
        console.log('Error: ', error);
    })
}