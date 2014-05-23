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
          sketches: SketchMate.sketches
        });
        
        Backbone.history.start();
      }
    });
  }
};


// 
// window.PostApp = {
//   Models: {},
//   Collections: {},
//   Views: {},
//   Routers: {},
//   initialize: function() {
//     PostApp.posts = new PostApp.Collections.Posts();
//     PostApp.posts.fetch({
//       success: function () {
//         new PostApp.Routers.Router({
//           $rootEl: $("#content"),
//           posts: PostApp.posts
//         });
//         Backbone.history.start();
//       }
//     });
//   }
// };


$(document).ready(function(){
  SketchMate.initialize();
});
