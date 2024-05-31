function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
  }
  
  let formElement = document.querySelector("form");
  formElement.addEventListener("submit", handleSearchSubmit);
  