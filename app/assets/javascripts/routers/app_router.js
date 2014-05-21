FP.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "" : "drawingNew"
  },
  
  drawingNew: function(){
    var newDrawingView = new FP.Views.NewDrawing({
      model: newDrawing
    });
    
    this._swapView(newDrawingView);
  },
})