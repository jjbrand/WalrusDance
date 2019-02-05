$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").toggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#walrus").click(function() {
  $("body").removeClass();
  $("body").addClass("walrus-background");
  });

});
