let city = localStorage.getItem("city")
  ? ocalStorage.getItem("city")
  : "tashkent";
let api = `http://api.weatherapi.com/v1/current.json?key=b7103d4704784776984135054260408&q=${city}&aqi=yes`;

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });


  