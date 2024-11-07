const api_key = "6a32e3ca33e99c3cfb13df26fe9f7b8b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeatherData(city) {
  const response = await fetch(apiUrl + city + `&appid=${api_key}`);

  if (!response.ok) {
    alert("Error fetching weather data check city name");
  } else {
    const data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    const icondata = data.weather[0].icon;
    setIcon(icondata);
  }
}

searchbtn.addEventListener("click", () => {
  getWeatherData(searchbox.value);
  searchbox.value = "";
});

function setIcon(icon){
    switch (icon) {
        case "01d":
        case "01n":
          weatherIcon.src = "img/sun.png";
          break;
        case "02d":
        case "02n":
          weatherIcon.src = "img/wind.png";
          break;
        case "03d":
        case "03n":
          weatherIcon.src = "img/cloudy.png";
          break;
        case "04d":
        case "04n":
          weatherIcon.src = "img/cloud.png";
          break;
        case "09d":
        case "09n":
          weatherIcon.src = "img/rain.png";
          break;
        case "10d":
        case "10n":
          weatherIcon.src = "img/storm.png";
          break;
        case "11d":
        case "11n":
          weatherIcon.src = "img/scattered-thunderstorms.png";
          break;
        case "13d":
        case "13n":
          weatherIcon.src = "img/snow.png";
          break;
        case "50d":
        case "50n":
          weatherIcon.src = "img/mist.png";
          break;
      }
}

getWeatherData("surat");