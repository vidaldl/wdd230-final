const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&appid=eac45e5be5788c06137dc6edfffeacbc";
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);
    document.getElementById("temp").textContent = jsObject.main.temp + " °F";
    document.getElementById("status").textContent = jsObject.weather[0].description;
    document.getElementById("status-img").setAttribute("src", `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`);
    document.getElementById("wind-speed").textContent = jsObject.wind.speed + " km/h";

    if(jsObject.current.temp < 50) {
        
        let chill = Math.round((35.74 + (0.6215 * jsObject.current.temp))-(35.75 * Math.pow(jsObject.current.wind_speed,0.16)) + (0.4275*jsObject.current.temp*Math.pow(jsObject.current.wind_speed,0.16)));

        document.getElementById("wind-chill").innerText = chill + "°C";
    } else {
        document.getElementById("wind-chill").innerText = "N/A";
    }

  };
getWeather();