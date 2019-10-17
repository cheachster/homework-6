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
      var weather = response.main.temp
      var humidity =
    console.log(response);
    
  });
}
