SketchMate.Collections.Sketches = Backbone.Collection.extend({
  model: SketchMate.Models.Sketch, 
  url: "/api/sketches",
  
  getOrFetch: function(id){
    var model;
    var sketches = this;
    
    if(model = this.get(id)){
      model.fetch();
      return model;
    } else {
      model = new SketchMate.Models.Sketch({id: id});
      model.fetch({
        success: function(){
          sketches.add(model)
        }
      });
      return model;
    }
  }
})

window.SketchMate.sketches = new SketchMate.Collections.Sketches();