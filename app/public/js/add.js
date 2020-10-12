// The code in add.js handles what happens when the user clicks the "Add a restaurant" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newReview object
  var newReview = {
    username: $("#username").val().trim(),
    restaurant_name: $("#restaurant_name").val().trim(),
    rating: $("#rating").val().trim(),
    // pages: $("#pages").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newReview)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#username").val("");
  $("#restaurant_name").val("");
  $("#rating").val("");
  // $("#pages").val("");

});
