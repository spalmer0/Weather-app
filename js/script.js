

// Constants and variables
const API_KEY = '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
let weatherData, userInput;

// Cached Element References
const $title = $('#title');
const $temp = $('#temp');
const $index = $('#index');
const $desc = $('#desc');
const $input = $('input[type="text"]');
const $form = $('form');

// Event listeners
$form.on('submit', handleGetData);

// Functions

function handleGetData(event) {
    
    event.preventDefault();
    userInput = $input.val();

    if(!userInput) return;

    $.ajax(BASE_URL + userInput + '&units=imperial&appid=' + API_KEY)
    .then(function(data) {
        weatherData = data;
        render();
    }, function(error) {
        console.log('Error: ', error);
    })
}

function render() {
    $title.text('Weather For: ' + weatherData.name);
    $temp.text('Temperature: ' + weatherData.main.temp + 'º');
    $index.text('Feels Like: ' + weatherData.main.feels_like + 'º');
    $desc.text('Weather: ' + weatherData.weather[0].description);
}