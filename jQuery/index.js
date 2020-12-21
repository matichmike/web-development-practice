// $(document).ready(function() {}) line for when the script line is at the beginning of html

// $("h1").css("color", "red"); // same as document.querySelectorAll("h1")

// $("h1").addClass("big-title margin-50");

// // check if elem has a class $("h1").hasClass("margin-50");

// $("h1").text("Bye");

// $("button").html("<em>Dont click</em>");

// get img src
// $("img").attr("src")

// set img src
// $("a").attr("href", "https://yahoo/com")

$("h1").click(function() {
  $("h1").css("color", "purple")
})

// $("button").click(function() {
//   $("h1").fadeToggle();
// })
// $("button").click(function() {
//   $("h1").slideToggle();
// })
$("button").click(function() {
  $("h1").slideUp().slideDown().animate({
    opacity:0.5
  });
})

$("input").keydown(function(event) {
  console.log(event.key);
})

$("body").keydown(function(event) {
  $("h1").text(event.key);
})

$("h1").on("mouseover", function() {
  $("h1").css("color", "red");
})