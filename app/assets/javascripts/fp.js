window.FP = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new FP.Routers.Router({
      $rootEl: $("#content")
    });
    BAckbone.history.start();
    alert('Hello from Backbone!');
  }
};

$(document).ready(function(){
  FP.initialize();
});
