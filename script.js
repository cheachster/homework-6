const apiKey = "fd2e3d407f27f9aa9bfa575b0ace96fe";


$(".btn").on("click", function() {
  event.preventDefault();
  var cityName = $("#city")[0].value;
  console.log(cityName);
  var queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${apiKey}`;

  var query5day = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${apiKey}`;

 
  

  displayWeather(queryUrl);
  display5day(query5day);

});

function displayWeather(queryUrl) {
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function(response) {
    console.log(response);
    var location = response.name;
    var weather = response.main.temp;
    var humidity = response.main.humidity;
    var date = new Date(response.dt);
    var wind = response.wind.speed;

    $("#weather").html(`
          <h1>City: ${location}</h1>
          <h3>Date: ${date}</h3>
          <h3>Temp:${weather}&deg;C</h3>
          <p>Humidity:${humidity}%</p>
          <p>Wind:${wind}km/hr</p>
      `);
    console.log(response);
    console.log(location);
    console.log($("#weather").html());
  });
}

function display5day(query5day) {
  $.ajax({
    url: query5day,
    method: "GET",
  }).then(function(response) {
    console.log(response);

    
    $('#fiveDay').html(`
    <h1>Next 5 days<h1>
    <div class="card"><div class="card-body">${response.list[4].main.temp}&deg;C
    ${response.list[4].dt_txt}</div></div>
    <div class="card"><div class="card-body">${response.list[12].main.temp}&deg;C
    ${response.list[12].dt_txt}</div></div>
    <div class="card"><div class="card-body">${response.list[20].main.temp}&deg;C
    ${response.list[20].dt_txt}</div></div>
    <div class="card"><div class="card-body">${response.list[28].main.temp}&deg;C
    ${response.list[28].dt_txt}</div></div>
    <div class="card"><div class="card-body">${response.list[36].main.temp}&deg;C
    ${response.list[36].dt_txt}</div></div>
    
    `)
  
  });
}
