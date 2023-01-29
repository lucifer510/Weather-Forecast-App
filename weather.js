const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4e8e20714amsh8627bffe7c16fc0p165742jsn9419b5a889bb",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      // cloud_pct.innerHTML = response.cloud_pct;
      // 12 hour time format for sunrise
      var timestamp = response.sunrise; // September 20, 2021
      var date = new Date(timestamp*1000);
      var options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      var dateString = date.toLocaleString("en-US", options);
      console.log(dateString);

      //
      // Time Format For Sunrise
      var timestamp2 = response.sunset; // September 20, 2021
      var date2 = new Date(timestamp2*1000);
      var options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      var dateString2 = date2.toLocaleString("en-US", options);
      console.log(dateString2);

      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = dateString;
      sunset.innerHTML = dateString2;
      console.log(response);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});



getWeather("Patan");
