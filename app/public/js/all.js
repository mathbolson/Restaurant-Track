
// Make a get request to our api route that will return every book
$.get("/api/all", function(data) {

  for (var i = 0; i < data.length; i++) {

    $("#ratingsList").append('<div>' + '<h4>' + data[i].username + '</h4>' + '<h4>' + data[i].restaurant_name + '</h4>' + '<h4>' + data[i].rating + '</h4>' + '<button id="' + data[i].id + '"class="delete" >' + "DELETE" + '</button>' + '<h4>---------------------------------</h4>' + '</div>');

    // $("#ratingsList").append('<h4>' + data[i].username + '</h4>');
    // $("#ratingsList").append('<h4>' + data[i].restaurant_name + '</h4>');
    // $("#ratingsList").append('<h4>' + data[i].rating + '</h4>' + '<button class="delete" >' + "DELETE" + '</button>');
    // $("#ratingsList").append('<h4>---------------------------------</h4>');

  }

    $(".delete").click(function(event) {

      $.ajax({
        method: "DELETE",
        url: "/api/restaurant/" + this.id
      })
        // On success, run the following code
        .then(function() {
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

 // }
});

$("#matchmaker").click(function(event) {
  //event.preventDefault();
  console.log("matching")
  
})
