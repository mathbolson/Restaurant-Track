// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();



  // Save the book they typed into the restaurant-search input
  var cityName = $("#restaurant-search").val().trim();

  var settings = {
    "url": "http://opentable.herokuapp.com/api/restaurants?city=" + cityName,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response.restaurants);
    renderRestaurants(response.restaurants);
  });



  // // Make an AJAX get request to our api, including the user's book in the url
  // $.get("/api/" + restaurantSearched, function(data) {

  //   console.log(data);
  //   // Call our renderBooks function to add our books to the page
  //   renderBooks(data);

  // });

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

  // // Empty each input box by replacing the value with an empty string
  // $("#title").val("");
  // $("#author").val("");
  // $("#genre").val("");
  // $("#pages").val("");

});

// // When user hits the author-search-btn
// $("#author-search-btn").on("click", function() {

//   // Save the author they typed into the author-search input
//   var authorSearched = $("#author-search").val().trim();

//   // Make an AJAX get request to our api, including the user's author in the url
//   $.get("/api/author/" + authorSearched, function(data) {

//     // Log the data to the console
//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderBooks(data);

//   });

// });

// // When user hits the genre-search-btn
// $("#genre-search-btn").on("click", function() {

//   // Save the book they typed into the genre-search input
//   var genreSearched = $("#genre-search").val().trim();

//   // Make an AJAX get request to our api, including the user's genre in the url
//   $.get("/api/genre/" + genreSearched, function(data) {

//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderBooks(data);

//   });

// });

function renderRestaurants(data) {

  console.log("renderRestaurants")
  //if (data.length !== 0) {

    // $("#stats").empty();
    // $("#stats").show();

  for (var i = 0; i < data.length; i++) {
    $("#restaurantList").append('<h4>' + data[i].name + '</h4>');
  }



      // var div = $("<div>");

      // div.append("<h2>" + data[i].name + "</h2>");
      // div.append("<p>Author: " + data[i].author + "</p>");
      // div.append("<p>Genre: " + data[i].genre + "</p>");
      // div.append("<p>Pages: " + data[i].pages + "</p>");
      // div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");

      // $("#stats").append(div);

  // }

    // $(".delete").click(function() {

    //   $.ajax({
    //     method: "DELETE",
    //     url: "/api/book/" + $(this).attr("data-id")
    //   })
    //     // On success, run the following code
    //     .then(function() {
    //       console.log("Deleted Successfully!");
    //     });

    //   $(this).closest("div").remove();

    // });

 // }
}
