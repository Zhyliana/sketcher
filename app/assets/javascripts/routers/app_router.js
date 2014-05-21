FP.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl  
  },
  
  routes: {
    "" : "drawingNew"
  },
  
  drawingNew: function(){
    var newDrawing = new FP.Models.Drawing();
    var newDrawingView = new FP.Views.NewDrawing({
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