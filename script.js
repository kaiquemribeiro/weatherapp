let myAPI = '32226dc9cba44aa4ee6dd5aa71c0a863';
let unit = 'metric';
let search;

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('citynameinput').value 
    if (searchTerm)
        searchWather(searchTerm)
})

function searchWather(search){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${myAPI}&units=${unit}`).then(result => {
        return result.json();
    }).then(result => {
        init(result)
    })
}
function init(resultFromServer){

    let weatherDescription = document.getElementById('weatherDescriptionHeader')
    let temperature = document.getElementById('temperature')
    let humidity = document.getElementById('humidity')
    let windSpeed = document.getElementById('windSpeed')
    let cityname = document.getElementById('cityname')
    let countryName = document.getElementById('country')

    cityname.innerText = resultFromServer.name
    temperature.innerText = Math.floor(resultFromServer.main.temp) + 'ºC'
    humidity.innerText = 'Humidity ' + resultFromServer.main.humidity + '%'
    windSpeed.innerText = 'Winds at ' + resultFromServer.wind.speed + ' km/h'
    weatherDescription = resultFromServer.weather[0].description
    weatherDescriptionHeader.innerText = weatherDescription
    countryName.innerText = resultFromServer.sys.country

}
