

// Constants and variables
const API_KEY = CONFIG.openWeatherAPIKey;

const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
let weatherData, userInput;

// Cached Element References
const $title = $('#title');
const $forecast = $('#forecast');
const $temp = $('#temp');
const $index = $('#index');
const $desc = $('#desc');
const $input = $('input[type="text"]');
const $form = $('form');
const $days = $('#days');



// Event listeners
$form.on('submit', handleGetData);

// Functions

function handleGetData(event) {
    
    event.preventDefault();
    userInput = $input.val();
    numDays = $days.val();
    console.log(numDays);

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
    $title.text('Weather For: ' + weatherData.city.name);
    $temp.text('Temperature: ' + weatherData.list[0].main.temp + 'º');
    $index.text('Feels Like: ' + weatherData.list[0].main.feels_like + 'º');
    $desc.text('Weather: ' + weatherData.list[0].weather[0].description);
}