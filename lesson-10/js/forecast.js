const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=6828ab982799b5bafd721bd612a9faec';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

    });