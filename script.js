

const key = "9cac705eaf333027b25c853d706a52cc"


const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const city = document.querySelector("#city-name-input")

const date = new Date();
document.querySelector(".date").innerHTML = date.getDate() +"."+ date.getMonth()+ "."+ date.getFullYear() + " UTC " + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();


async function getWeather(){
    if(city.value){
        const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&units=metric`        
        const response = await fetch(url)
        if(response.status == 404){
            document.querySelector(".city-name").innerHTML = "Not Found";
        }else{
            const data = await response.json();
            console.log(data)
            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".status").innerHTML = data.weather[0].main;
            document.querySelector("#temp").innerHTML = `${data.main.temp}<br><span>&deg;C</span>`;
            document.querySelector("#humidity").innerHTML = `${data.main.humidity}<br><span>g/m<sup>3</sup></span>`;
            document.querySelector("#wind").innerHTML = `${data.wind.speed}<br><span>kmh</span>`;
            
            document.querySelector("#status-image").setAttribute("src",setImage(data.weather[0].main))

        }
    }
}


function setImage(status){
    switch(status){
        case "Clouds": return "./assets/Cloudy.png"
        case "Rain": return "./assets/Rainy.png"
        case "Clear": return "./assets/Clear.png"
        case "Sunny": return "./assets/Sunny.png"
        case "Storm": return "./assets/Storm.png"
        case "Snow": return "./assets/Snow.png"
        case "Haze": return "./assets/Haze.png"
        case "Mist": return "./assets/Mist.png"
        case "Smoke": return "./assets/Smoke.png"
        
    }
}

document.querySelector("#submit").addEventListener("click",getWeather)