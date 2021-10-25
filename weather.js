

const API_KEY="33f1c9cc35a9a361cfff3bfdaed57f05";

function onGeoOK(position){
const lat=position.coords.latitude;
const lon=position.coords.longitude;
console.log(lat,lon);

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(url)
.then((response) => response.json())
.then((data) => {
    const weather= document.querySelector("#weather span:first-child");
    const city= document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;  
});

}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
