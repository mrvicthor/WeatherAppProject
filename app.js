let myForm = document.querySelector(".weatherForm");
let inputField = myForm.querySelector("input");

let weatherPlaceholder = document.querySelector(".current-icon");
let cityNameHolder = document.querySelector(".timezone");
let weatherDescription = document.querySelector(".weather-description");
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity-value");
let windSpeed = document.querySelector(".wind-value");
let pressure = document.querySelector(".pressure-value");
let cityName = undefined;

const getWeather = e => {
  e.preventDefault();

  cityName = inputField.value;

  document.querySelector(".city").value = "";

  console.log(cityName);

  const proxy = "https://cors-anywhere.herokuapp.com/";
  const api = `${proxy}http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=57019ae8092804d78c7cd0db700638a5`;

  fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      cityNameHolder.textContent = data.name + ", " + data.sys.country;
      let currentId = data.weather[0].id;

      let html = `<i class='owf owf-${currentId} owf-5x' style='color:#2196F3'></i>`;

      weatherPlaceholder.innerHTML = html;

      temperature.textContent = Math.floor(data.main.temp);
      weatherDescription.textContent = data.weather[0].description;
      humidity.textContent = data.main.humidity;
      windSpeed.textContent = data.wind.speed;
      pressure.textContent = data.main.pressure;
      console.log(currentId);
    });
};

myForm.addEventListener("submit", getWeather);
