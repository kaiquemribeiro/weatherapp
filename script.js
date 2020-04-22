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
    console.log(resultFromServer)

    let weatherDescription = document.getElementById('weatherDescriptionHeader')
    let temperature = document.getElementById('temperature')
    let humidity = document.getElementById('humidity')
    let windSpeed = document.getElementById('windSpeed')
    let cityname = document.getElementById('cityname')
    let minmax = document.getElementById('minmax')
    let weatherIcon = document.getElementById('weatherIcon')

    if (resultFromServer.cod != 404){
        weatherIcon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.weather[0].icon + '.png'
        cityname.innerText = resultFromServer.name + ' - ' + resultFromServer.sys.country
        temperature.innerText = Math.floor(resultFromServer.main.temp) + 'ºC'
        minmax.innerText = 'Min ' + Math.floor(resultFromServer.main.temp_min)+ 'ºC ' + ' Max ' + Math.floor(resultFromServer.main.temp_max) + 'ºC'
        humidity.innerText = 'Humidity ' + resultFromServer.main.humidity + '%'
        windSpeed.innerText = 'Winds at ' + resultFromServer.wind.speed + ' km/h'
        weatherDescription = resultFromServer.weather[0].description
        weatherDescriptionHeader.innerText = weatherDescription
        
    }else{
            cityname.innerText = 'City not found'
            temperature.innerText = ''
            humidity.innerText = ''
            windSpeed.innerText = ''
            weatherDescriptionHeader.innerText = ''
            minmax.innerText = ''
            weatherIcon.src = ''
    }
}
