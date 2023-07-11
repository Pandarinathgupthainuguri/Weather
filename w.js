const apikey = "4556461de1bf3d3940b01285d6516510"
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apikey}`)
    var data = await response.json()
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp+'°c';
    document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
    document.querySelector('.wind').innerHTML=data.wind.speed+"Km/h";
    if(data.weather[0].main=="clouds"){
        weatherIcon.src="./img/clouds.png"
    }
    if(data.weather[0].main=="clear"){
        weatherIcon.src="./img/clear.png"
    }
    if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./img/drizzle.png"
    }
    if(data.weather[0].main=="Mist"){
        weatherIcon.src="./img/mist.png"
    }
    document.querySelector(".weather").style.display="block"
}

searchBtn.addEventListener("click",()=>{
    
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keyup",(e)=>{
    if(e.keyCode===13){
    checkWeather(searchBox.value);
    }
})