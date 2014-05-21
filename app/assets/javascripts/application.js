// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require fp
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .
//= require serialize_json
//= require fabric
//= require bootstrap


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
    if (drawing == true) {
      ctx.lineTo(event.pageX - canvasOffset.left, event.pageY - canvasOffset.top);
      ctx.stroke();
    }
  });

  $("#my-canvas").mouseup(function(){
    drawing = false;
  });
});