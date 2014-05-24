SketchMate.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl  
  },
  
  routes: {
    "" : "sketchNew",
    "sketch/:id" : "sketchShow",
    'white_cards/vote' : "cardsIndex"
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
    
  cardsIndex: function(){
    var allWhiteCards = SketchMate.Collections.WhiteCards()
    var allWhiteCardsView = new SketchMate.Views.IndexWhiteCards({
      collection: allWhiteCards
    });
    
    allWhiteCards.fetch()
    this._swapView(allWhiteCardsView)
  },
  
  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$rootEl.html(view.render().$el)
  }
})