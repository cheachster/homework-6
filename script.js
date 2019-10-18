const apiKey = "fd2e3d407f27f9aa9bfa575b0ace96fe";

$(".btn").on("click", function() {
  event.preventDefault();
  console.log("clicked");
  var cityName = $("#city")[0].value;
  console.log(cityName);
  var queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${apiKey}`;

  displayWeather(queryUrl);
});

function displayWeather(queryUrl) {
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {

    
    console.log(response);
      var location = response.name;
      var weather = response.main.temp;
      var humidity = response.main.humidity;
      var date = new Date(response.dt);
      var wind = response.wind.speed;

      $('#weather').html(`
          <h1>${location}</h1>
          <h3>${date}</h3>
          <h3>${weather}</h3>
          <h3>${humidity}</h3>
          <p>${wind}</p>
      `);
    console.log(response);
    console.log(location);
    console.log( $('#weather').html() );
    
  });
}
