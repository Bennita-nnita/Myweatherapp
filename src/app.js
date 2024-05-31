function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML=Math.round(temperature);
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