const temp = document.querySelector("#weather-temp");
const city = document.querySelector("#weather-city");
const API_KEY = "3d77231654e2e662c1f6318b7ef26ebf";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      temp.innerText = `${data.main.temp}°C, ${data.weather[0].main} @`;
      city.innerText = `${data.name}`;
    });
}
function geoErr() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(geoOk, geoErr);

