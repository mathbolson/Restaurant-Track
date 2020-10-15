// The code in add.js handles what happens when the user clicks the "Add a restaurant" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
console.log("hello");
  // Make a newReview object
  var newRat = {
    username: $("#usernameAdd").val().trim(),
    restaurant_name: $("#restaurantNameAdd").val().trim(),
    rating: $("#ratingAdd").val().trim(),
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/add", {
    username: newRat.username,
    restaurant_name: newRat.restaurant_name,
    rating: newRat.rating,
  })
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });


//   // Empty each input box by replacing the value with an empty string
  $("#usernameAdd").val("");
  $("#restaurantNameAdd").val("");
  $("#ratingAdd").val("");
  // $("#pages").val("");

});
