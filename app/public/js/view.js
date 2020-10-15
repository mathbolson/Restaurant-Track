// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the restaurant they typed into the restaurant-search input
  var cityName = $("#restaurant-search").val().trim();

  var settings = {
    "url": "https://opentable.herokuapp.com/api/restaurants?city=" + cityName,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) { 
    console.log(response.restaurants);
    renderRestaurants(response.restaurants);
  });
  

});

$("#hello").on("click", function(event) {

  event.preventDefault();

  // Make a newRating object
  var newRating = {
    username: $("#usernameInput").val().trim(),
    restaurant_name: $("#restaurantNameInput").val().trim(),
    rating: $("#ratingInput").val().trim(),
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", {
    username: newRating.username,
    restaurant_name: newRating.restaurant_name,
    rating: newRating.rating,
  })
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });
//   // Empty each input box by replacing the value with an empty string
$("#usernameInput").val("");
$("#restaurantNameInput").val("");
$("#ratingInput").val("");
// $("#pages").val("");
 

});



function renderRestaurants(data) {


  console.log("renderRestaurants")
  //if (data.length !== 0) {

    // $("#stats").empty();
    // $("#stats").show();

  for (var i = 0; i < data.length; i++) {
    $("#restaurantList").append('<div class="cards">' +
     '<button class="restaurantButton" id="' + data[i].name + '" >' + data[i].name + '</button>' +
      '<i class="fa fa-map-marker" style="font-size:24px">' + "Address: " + data[i].address + '</i>' +
     '<i class="fa fa-phone" style="font-size:24px">' + "Phone Number: " + data[i].phone + '</i>' +
     //'<h4>' + "Price 1-5: " +
     // data[i].price + '</h4>' +
     '</div>');

  }

  var modal = document.getElementById("myModal");

  $(".restaurantButton").css("font-size", "15px")
  $(".restaurantButton").css("margin-top", "15px")
  $(".restaurantButton").css("border", "none")
  $(".restaurantButton").css("font-weight", "bold")
  $(".restaurantButton").css("font-family", "Trebuchet MS, Helvetica, sans-serif")

  $(".restaurantButton").css("margin-left", "15px")
  $(".cards").css("border", "1px solid black")
  $(".cards").css("margin-bottom", "10px")
  // $(".cards").css("margin-left", "5px")
  $(".cards").css("margin-right", "50px")
  $(".cards").css("max-width", "225px")
  $(".cards").css("height", "250px")
  $(".cards").css("background-color", "white")
  $(".cards").css("float", "left")

  $(".fa.fa-map-marker").css("margin-top", "25px")
  // $(".fa.fa-phone").css("margin-top", "20px") 


  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  


  $(".restaurantButton").on('click', function(event){
    $("#restaurantNameInput").val(event.target.innerHTML);
    modal.style.display = "block";
    //(... rest of your JS code)
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


}
  
