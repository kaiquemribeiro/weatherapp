let myAPI = "32226dc9cba44aa4ee6dd5aa71c0a863";
const unit = "metric";
let searchCity;

function getLocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
    searchLoc(position.coords.latitude, position.coords.longitude);
  });
}

document.getElementById("searchBtn").addEventListener("click", () => {
  let searchTerm = document.getElementById("citynameinput").value;
  if (searchTerm) searchWather(searchTerm);
});

function searchLoc(latitude, longitude) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${myAPI}&units=${unit}`
  )
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      init(result);
    });
}

function searchWather(searchCity) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${myAPI}&units=${unit}`
  )
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      init(result);
    });
}

function init(resultFromServer) {
  let weatherDescription = document.getElementById("weatherDescriptionHeader");
  let temperature = document.getElementById("temperature");
  let humidity = document.getElementById("humidity");
  let windSpeed = document.getElementById("windSpeed");
  let cityname = document.getElementById("cityname");
  let minmax = document.getElementById("minmax");
  let weatherIcon = document.getElementById("weatherIcon");
  let flag = document.getElementById("flag");

  if (resultFromServer.cod != 404) {
    weatherIcon.src =
      "https://openweathermap.org/img/wn/" +
      resultFromServer.weather[0].icon +
      ".png";
    cityname.innerText = resultFromServer.name;
    flag.src = `https://flagsapi.com/${resultFromServer.sys.country}/flat/64.png`;
    temperature.innerText = Math.floor(resultFromServer.main.temp) + "ºC";
    minmax.innerText =
      "Min " +
      Math.floor(resultFromServer.main.temp_min) +
      "ºC - " +
      " Max " +
      Math.floor(resultFromServer.main.temp_max) +
      "ºC";
    humidity.innerText = "Humidity " + resultFromServer.main.humidity + "%";
    windSpeed.innerText = "Winds at " + resultFromServer.wind.speed + " km/h";
    weatherDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText = weatherDescription;
  } else {
    cityname.innerText = "oops! city not found";
    temperature.innerText = "";
    humidity.innerText = "";
    windSpeed.innerText = "";
    weatherDescriptionHeader.innerText = "";
    minmax.innerText = "";
    weatherIcon.src = "";
    flag.src = "transparent_icon.png";
  }
}
