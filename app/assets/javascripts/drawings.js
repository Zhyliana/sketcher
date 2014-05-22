// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(function(){
  var drawing = false;
  var canvas = document.getElementById("my-canvas");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "black"; 
  ctx.lineWidth = 10;
  ctx.lineCap = 'round'; 
  var canvasOffset = $("#my-canvas").offset();
  
  $(".paint").click(function(event){
    var color = event.target.id;      
    ctx.strokeStyle = color
    ctx.moveTo(event.pageX - canvasOffset.left, event.pageY - canvasOffset.top);
  });
  
  $(".brush").click(function(event){
    var width = JSON.parse(event.target.getAttribute("data-size-id"));
    ctx.lineWidth = width;
  });

  
  $("#my-canvas").mousedown(function(event){
    drawing = true;
    ctx.beginPath();
  });
  
  $("#my-canvas").mousemove(function(event){
    if (drawing === true) {
      ctx.lineTo(event.pageX - canvasOffset.left, event.pageY - canvasOffset.top);
      ctx.stroke();
    }
  });

  $("#my-canvas").mouseup(function(){
    drawing = false;
  });
  
  $("#submit-drawing-button").click(function(event){
    return canvas.toDataURL()
  })
});