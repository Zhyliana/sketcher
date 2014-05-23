SketchMate.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl  
  },
  
  routes: {
    "" : "sketchNew",
    "sketch/:id" : "sketchShow"
  },
  
  sketchShow: function(id){
    var sketch = SketchMate.sketches.getOrFetch(id);
    sketch.fetch();
    
    var sketchView = new SketchMate.Views.ShowSketch({
      model: sketch,
      cards: sketch.whiteCards(),
    })
    
    this._swapView(sketchView);
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