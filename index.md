<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather</title>
    <link rel="stylesheet" href="style.css">
    <link rel = "icon" href =  "https://i.imgur.com/Vfu3gdv.png" type = "image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=B612:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap" rel="stylesheet">
</head>
<body>
        <h1>WEATHER</h1>
        <div style="display:flex;justify-content:center;align-items:center;">
            <div><input type="text" placeholder=" Enter a city" id="citynameinput" autofocus> 
            <button class="button" id="searchBtn">Search</button></div>
        </div>
        <div style="display:flex;justify-content:center;align-items:center;">
            <div><button class="locbtn" id="locbtn">➢ Use my location</button></div></div>
    
    <div id="weatherContainer">
        <div id="cityname"></div>
        <div id="country"></div>
            <div id="temperature"></div>
            <div id="weatherDescriptionHeader"></div>
    </div>
    <div id="windSpeed" class="info"></div>
    <div id="humidity" class="info"></div>

    <footer>
        <span class="page-footer">Made with &#127752; by 
        <a href="http://github.com/kaiquemribeiro">kiq</a>
    </footer>

    <script src="script.js"></script>
</body>
</html>
