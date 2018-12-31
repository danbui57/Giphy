var celebrities = ["Rhianna", "Kate Perry", "Donald Glover", "Jennifer Lawrence", "Lindsay Lohan",
    "Miley Cirus", "Al Pacino", "Ariana Grande", "Mac Miller", "zach galifianakis",
    "Tyra Banks", "Beyonce Knowles", "Brad Pitt", "Kanye West", "Megan Fox",
    "Johnny Depp", "Eminem", "Sofia Vergara", "Halle Barry", "Drake"];

function displayGyphy() {
    $("#images").empty();

    var topic = $(this).attr("data-type");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=YtZ762px9N1y2WYdOGGN1yY2onb21QLl&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var res = response.data;
        console.log(res)
        for (var i = 0; i < res.length; i++) {

            var celebsDiv = $("<span class='animal-item'>");

            var imageUrl = res[i].images.fixed_height_still.url;
            var dataAnimate = res[i].images.fixed_height.url;
            console.log("image", imageUrl)

            var celebs = $("<img>");

            celebs.attr("src", imageUrl);
            celebs.attr("data-still", imageUrl)
            celebs.attr("data-animate", dataAnimate)
            celebs.attr("data-state", "still");
            celebs.attr("class", "gif");
            celebs.attr("alt", "celebrity");

            celebsDiv.append(celebs)
            $("#images").append(celebsDiv);
        }
    });
};

$(document).on("click", ".gif", function () {

    var state = $(this).attr("data-state");
    console.log("state", state)

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

function renderButtons() {
    $(".celebrity-buttons").empty();
    for (var i = 0; i < celebrities.length; i++) {

        var a = $("<button>");
        a.addClass("celebrity");
        a.attr("data-type", celebrities[i]);
        a.text(celebrities[i]);
        $(".celebrity-buttons").append(a);
    }
}

$("#add-celebrity").on("click", function (event) {

    event.preventDefault();
    var celeb = $("input").val().trim();
    celebrities.push(celeb);
    renderButtons();
});

$(document).on("click", ".celebrity", displayGyphy);

renderButtons();