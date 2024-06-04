function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");

    let iconElement = document.querySelector("#icon");
    let iconUrl = response.data.condition.icon_url;


    iconElement.innerHTML = `<span><img src="${iconUrl}" class="current-temperature-icon" alt="Weather Icon"></span>`;
    
    cityElement.innerHTML = response.data.city;
    let currentDate = new Date();
    timeElement.innerHTML = formatDate(currentDate);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`
    temperatureElement.innerHTML=Math.round(temperature);

    getForecast(response.data.city);
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


function getForecast(city){
  let apiKey = "a4t22d03404203ac1b80ofbb2b04aaf5";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(displayForecast);}


  function displayForecast(response) {
    let forecastElement = document.querySelector("#forecast");

    let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastHTML = "";

    days.forEach(function (day) {
        forecastHTML += `
        <div class="row">
            <div class="col-2">
                <div class="weather-forecast-date">
                    ${day}
                </div>
                <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" alt="" width="36"/>
                <div class="weather-forecast-temperatures">
                    <span class="weather-forecast-temperature-max">18°</span>
                    <span class="weather-forecast-temperature-min">12°</span>
                </div>
            </div>
        </div>`;
    });
    forecastElement.innerHTML = forecastHTML;
}
  
  let formElement = document.querySelector("form");
  formElement.addEventListener("submit", handleSearchSubmit);
  
  searchCity("Accra")

  displayForecast();
  
 