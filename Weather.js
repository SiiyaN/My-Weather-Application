document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    let now = new Date();
    let currentDay = document.querySelector("#current-time");

    let hour = now.getHours();
    let minute = now.getMinutes();
    if (minute < 10) {
      minute = "0" + minute;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[now.getDay()];

    currentDay.innerHTML = `${day} ${hour}:${minute}`;
  }

  updateTime();
  setInterval(updateTime, 60000);
  document
    .querySelector("#search-button")
    .addEventListener("click", function () {
      let cityInput = document.querySelector("#city").value;
      if (cityInput) {
        document.querySelector(".city").innerHTML = cityInput;
      }
    });
});

function getWeatherInfo(city) {
  let apiKey = "f063aad8tb9d2a804775off7e6bf14bb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}
function displayTemp(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  temperatureElement.innerHTML = `Current temperature in ${city} is ${temperature}°C`;

  console.log(`Temperature: ${temperature}°C`);
}

getWeatherInfo("Midrand");
