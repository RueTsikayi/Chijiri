function refreshWeather(response){
 let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);}
  descriptionElement.innerHTML = response.data.condition.description;


function searchCity(city){
 let apiKey = "f8b66f4f59cb053eta5bb9oc6f6b798d";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   console.log(apiUrl);
    axios.get(apiUrl).then(refreshWeather);

}



function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");