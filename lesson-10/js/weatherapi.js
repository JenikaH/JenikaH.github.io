const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=6828ab982799b5bafd721bd612a9faec';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current').textContent = jsObject.weather[0].main;
        document.getElementById('high').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind').textContent = jsObject.wind.speed;
         
        
    });