var celebrities = ["Rhianna", "Kate Perry", "Donald Glover", "Jennifer Lawrence", "Lindsay Lohan",
    "Miley Cirus", "Al Pacino", "Ariana Grande", "Mac Miller", "zach galifianakis",
    "Tyra Banks", "Beyonce Knowles", "Brad Pitt", "Kanye West", "Megan Fox",
    "Johnny Depp", "Eminem", "Sofia Vergara", "Halle Barry", "Drake"];

    function displayGyphy () {

        for (var i = 0;i < celebrities.length;i ++)

// var topic = $(this).attr("data-name");        



    var topic = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=YtZ762px9N1y2WYdOGGN1yY2onb21QLl&tag=" + topic;
                    

console.log(queryURL)
    // " + topic;
    

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) { 
console.log(response)
       

           
        var imageUrl = response.data.images.fixed_height_still.url;
        var dataStill = response.data.images.fixed_height_still.url;
        var dataAnimate = response.data.images.fixed_height.url;
            
            //
            var celebs = $("<img>");
  
           
            
            
          
            celebs.attr("src", imageUrl);
            celebs.attr("data-still", dataStill)
            celebs.attr("data-animate", dataAnimate)
            celebs.attr("data-state", "still");
            celebs.attr("class", "gif");
            celebs.attr("alt", "celebrity");
  
           
            
            //
            $("#images").prepend(celebs);
        
      
        
    });

};

$(document).on("click", ".gif", function() {

    

            
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
     console.log(state)
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state","still");
    
    
    }
});

    function renderButtons() {

        $("#celebrity-buttons").empty();
        


        for (var i = 0; i < celebrities.length; i++) {

            console.log(celebrities[i])

            var a = $("<button>");

            a.addClass("celebrity");

            a.attr("data-name", celebrities[i] );

            a.text(celebrities[i]);

            $("#celebrity-buttons").append(a);
 
        }
    }

    $("#add-celebrity").on("click", function (event) {

        

        event.preventDefault();
       
        var celeb = $("#celebrity-input").val().trim();

        celebrities.push(celeb);

        renderButtons();
        
        
    });

    $(document).on("click", ".celebrity", displayGyphy);



    

    
      renderButtons();