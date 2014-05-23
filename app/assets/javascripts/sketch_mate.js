// window.SketchMate = {
//   Models: {},
//   Collections: {},
//   Views: {},
//   Routers: {},
//   initialize: function() {
// 
//     new SketchMate.Routers.AppRouter({
//       $rootEl: $("#content")
//     });
//     Backbone.history.start();
//   }
// };

window.SketchMate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
    SketchMate.sketches = new SketchMate.Collections.Sketches();   
    SketchMate.sketches.fetch({
      
      success: function(){
        
        new SketchMate.Routers.AppRouter({
          $rootEl: $("#content"),
          // sketches: SketchMate.sketches
        });
        
        Backbone.history.start();
      }
    });
    
  }
};

$(document).ready(function(){
  SketchMate.initialize();
});
