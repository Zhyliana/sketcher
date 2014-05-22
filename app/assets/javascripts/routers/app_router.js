SketchMate.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl  
  },
  
  routes: {
    "" : "drawingNew"
  },
  
  drawingNew: function(){
    var newDrawing = new SketchMate.Models.Drawing();
    var newDrawingView = new SketchMate.Views.NewDrawing({
      model: newDrawing
    });
    
    this._swapView(newDrawingView);
  },
  
  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$rootEl.html(view.render().$el)
  }
})