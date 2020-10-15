// Make a get request to our api route that will return every "long" book (300 pages or more)
$.get("/api/all/", function(data) {

  console.log(data)

  $("#submitFavRestaurant").on("click", function() {
    console.log("submitted")

    console.log($("#favRestaurantInput").val());
    $("#peopleList").html("");
    for (let i = 0; i < data.length; i++) {
      if (data[i].restaurant_name === $("#favRestaurantInput").val() && 2 < data[i].rating ) {
        console.log("invite this person:" , data[i].username)
        $("#peopleList").append("<h4>" + data[i].username + " - Rated this place " + data[i].rating + " stars!" + "</h4>");
      } else {
        console.log("no match for " + data[i].username)
      }
    }
  })


});
