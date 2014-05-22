SketchMate.Collections.Sketches = Backbone.View.extend({
  url: "/api/sketches",
  model: SketchMate.Models.Sketch, 
  
  getOrFetch: function(id){
    var model;
    var sketches = this;
    if(model = this.get(id)){
      model.fetch();
      return model;
    } else {
      model = new Trellino.Models.Board({id: id});
      model.fetch({
        success: function(){
          sketches.add(model)
        }
      });
      return model;
    }
  }
})