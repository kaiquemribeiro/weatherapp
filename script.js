let appId = '32226dc9cba44aa4ee6dd5aa71c0a863';
let unit = 'metric';
let searchMethod;

function searchWather(searchMethod){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchMethod}&appid=${appId}&units=${unit}`).then(result => {
        return result.json();
    }).then(result => {
        init(result)
    })
}
function init(resultFromServer){
    console.log(resultFromServer)

}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('citynameinput').value 
    if (searchTerm)
        searchWather(searchTerm)
})