# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function() {
  $(".playable-cards").sortable({
    items: ".card",
    cursorAt: { left: 75, top: 120 }, 
    revert: true,
    scrollSensitivity: 7,
    tolerance: "intersect",
    connectWith: "#canvas",
    start: function( event, ui ){
      $(ui.item).siblings().removeClass("selected")
      $(ui.item).addClass("selected")
    },
  })
  $( "#canvas" ).sortable({
    receive: function( event, ui ) {
      $(ui.item).addClass("selected")
      $( "#submit-new-sketch-card-assoc-btn" ).trigger( "click" );
    }
  });
})
