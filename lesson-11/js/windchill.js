/*
The formula to calculate the wind chill factor is 
LaTeX: f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16}f = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16, 
where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, 
and s is the wind speed in miles per hour.

Input requirements: "Wind Chill Temperature is officially defined for temperatures 
at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)." */
let temp = document.getElementById('high').textContent;
let windspeed = document.getElementById('wind').textContent;

let windchill = calc(temp, windspeed);

function calc(temp, windspeed){
  if(windspeed >= 3 && temp <= 50){
    wchill = 35.74 + 0.6215 * temp - 35.75 * wspeed ** 0.16 + 0.4275 * temp * wspeed ** 0.16;
    document.getElementById('chill').innerHTML=Math.floor(wchill) + "&#176;F";
  }
  else{
    document.getElementById('chill').innerHTML="N/A";
  }
}