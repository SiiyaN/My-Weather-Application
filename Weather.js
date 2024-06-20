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
