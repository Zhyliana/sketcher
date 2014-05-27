// SketchMate.Collections.CardSketchAssignments = Backbone.Collection.extend({
//   model: SketchMate.Models.Sketch, 
//   url: "/api/sketches",
//   
//   getOrFetch: function(id){
//     var model;
//     var collection = this;
// 
//     if(model = this.get(id)){
//       model.fetch();
//       return model;
//     } else {
//       model = new SketchMate.Models.Sketch({id: id});
//       model.fetch({
//         success: function(){
//           collection.add(model)
//         }
//       });
//       return model;
//     }
//   },
// })