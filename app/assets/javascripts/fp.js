window.FP = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new FP.Routers.Router({
      $rootEl: $("#content")
    });
    Backbone.history.start();
    alert('Hello from Backbone!');
  }
};

$(document).ready(function(){
  FP.initialize();
});
