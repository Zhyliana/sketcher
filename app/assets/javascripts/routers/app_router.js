SketchMate.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl  
  },
  
  routes: {
    "" : "sketchNew",
    "sketch/id" : "sketchShow"
  },
  
  sketchShow: function(id){
    var sketch = SketchMate.sketches.getOrFetch(id)
     var board = Trellino.Collections.boards.getOrFetch(id)
  },
  
  sketchNew: function(){
    var newSketch = new SketchMate.Models.Sketch();
    var newSketchView = new SketchMate.Views.NewSketch({
      model: newSketch
    });
    this._swapView(newSketchView);
  },
  
  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$rootEl.html(view.render().$el)
  }
})