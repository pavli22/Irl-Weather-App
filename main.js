const apiKey = "ed25684f92ab7020e2901727081b0491";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var imgStatus = document.querySelector(".weather img");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  if (response.status == 404 || searchBox.value == "") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      imgStatus.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      imgStatus.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      imgStatus.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      imgStatus.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      imgStatus.src = "images/mist.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
