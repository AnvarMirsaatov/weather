function getWeather() {
  const city = localStorage.getItem("city")
    ? localStorage.getItem("city")
    : "Toshkent";

  let api = `http://api.weatherapi.com/v1/current.json?key=be32b263b40045d4bf641850260508&q=${city}&aqi=yes `;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      render(data);
    });
}
getWeather();

function render(data) {
  document.querySelector(".city-name").innerHTML = data.location.name;
  document.querySelector(".date-text").innerHTML = data.location.localtime;
  document.querySelector(".main-temp").innerHTML = data.current.temp_c;
  document.querySelector(".temp-unit").innerHTML = "°C";
  document.querySelector(".weather-desc").innerHTML =
    data.current.condition.text;
}

document.querySelector("form").addEventListener("submit", function (e) {
  let input = document.querySelector(".enter_city_input").value;
  localStorage.setItem("city", input);
});
