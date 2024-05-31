function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    
    cityElement.innerHTML = response.data.city;
    let currentDate = new Date();
    timeElement.innerHTML = formatDate(currentDate);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`
    temperatureElement.innerHTML=Math.round(temperature);
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }


function searchCity(city){
    let apiKey = "a4t22d03404203ac1b80ofbb2b04aaf5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    
    searchCity(searchInput.value);
  }
  
  let formElement = document.querySelector("form");
  formElement.addEventListener("submit", handleSearchSubmit);
  
  searchCity("Accra")