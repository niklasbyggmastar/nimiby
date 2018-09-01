$(function(){
  $("#search_form").submit(function(e){ //When the user clicks the search button:
    if ($("#mobile").css("display")=="inline") {
      $(".container").animate({"margin-top": "15vh"}, "slow");
    }
      $( ".info" ).slideUp( 0 ).delay( 500 ).fadeIn( 1500 ); //weather details fade in
      $( "#search_div" ).fadeOut( 500 ); //search form fades away
      e.preventDefault();
      var city = $("#city").val();
      //First letter uppercase
      city = city.toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function(letter) {
        return letter.toUpperCase();
      });
      $("#city_name").text(city);
      var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=4890a8bd3957414d41cfd685ad0ded9e";
      loading(url, get_json_data); //Loading animation before json data loaded
      $("#city").val(""); //Clears the search form

  });
  //---------------------------------------------------------------------------------------------------------------------------------------


  $("#back_btn").click(function(){ //User clicks the back button
    if ($("#mobile").css("display")=="inline") {
      $(".container").animate({"margin-top": "26vh"}, "slow");
    }
    $( ".info" ).fadeOut( 500 ); //weather details fade out
    $( "#search_div" ).slideUp( 0 ).delay( 500 ).fadeIn( 1500 ); //search form fades back in
    //weather details cleared
    $("#weather").text("");
    $("#temp").text("");
    $("#wind").text("");
    $("#humidity").text("");
    $("#clouds").text("");
    $("#pressure").text("");
    $("#sunrise").text("");
    $("#sunset").text("");
    $("#weather_img").css("display", "none");
  });
  //----------------------------------------------
  $("#get_location").click(function () { //User gets their own location weather
    if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
          console.log(position.coords.latitude + ", " + position.coords.longitude);
          var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=4890a8bd3957414d41cfd685ad0ded9e";
          loading(url, get_json_data); //Loading animation before json data loaded
          $( ".info" ).slideUp( 0 ).delay( 500 ).fadeIn( 1500 );
          $( "#search_div" ).fadeOut( 500 );
        });
    }else{
      console.log("Browser doesn't support geolocation!");
    }
  });
});

//-------------------------------------------------------------------------------------------------

function get_json_data(url){
  var get_json = $.getJSON(url, function(json){
    var main = $.parseJSON(JSON.stringify(json));
    var weather = JSON.stringify(main['weather'][0]['description']).replace(/\"/g, "");
    weather = weather.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });
    var city_name = JSON.stringify(main.name).replace(/\"/g, "");
    $("#city_name").text(city_name);
    $("#weather").text(weather);
    var temp =  Number(JSON.stringify(main.main.temp)) - 273.15;
    $("#temp").text(temp.toFixed(0)  + String.fromCharCode(176) + "C");
    var wind = Number(JSON.stringify(main.wind.speed));
    $("#wind").text("Wind: " + wind.toFixed(0) + " m/s");
    $("#humidity").text("Humidity: " + JSON.stringify(main.main.humidity) + "%");
    $("#clouds").text("Clouds: " + JSON.stringify(main.clouds.all) + "%");
    $("#pressure").text("Pressure: " + JSON.stringify(main.main.pressure) + " hpa");
    //var sunrise = new Date(main.sys.sunrise);
    //$("#sunrise").text("Sunrise: " + sunrise.getHours() + ":" + sunrise.getMinutes());
    //var sunset = new Date(main.sys.sunset);
    //$("#sunset").text("Sunset: " + sunset.getHours() + ":" + sunset.getMinutes());
    console.log(main.sys.sunrise + ", " + main.sys.sunset);

    var icon_url = "/projects/weather/img/icons/" + JSON.stringify(main['weather'][0]['icon']).substr(1,2) + ".png";
    $("#weather_img").css("display", "inline");
    console.log(icon_url);
    $("#weather_img").attr("src", icon_url);
    $("#loading").css("display", "none");
    $("#loading").text("");
  }).fail(function() {
    console.log( "error" );
    $("#loading").css("display", "none");
    $("#loading").text("");
    $("#error_text").text("Could not get data for this city. Please try again.");
  });
}

function loading(url, callback){
  $("#error_text").text("");
  $("#loading").css("display", "block");
  var i = 0;
  setInterval(function() {
    i = ++i % 4;
    $("#loading").html(Array(i+1).join("."));
  },700);
  callback(url);
}
