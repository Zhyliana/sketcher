SketchMate.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl  
  },
  
  routes: {
    "" : "sketchNew"
  },
  
  sketchNew: function(){
    var newSketch = new SketchMate.Models.Sketch();
        debugger
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