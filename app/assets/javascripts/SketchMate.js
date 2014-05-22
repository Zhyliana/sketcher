window.SketchMate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    SketchMate.sketches = new SketchMate.Collections.Sketches();
    new SketchMate.Routers.AppRouter({
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  SketchMate.initialize();
});
