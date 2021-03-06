SketchMate.Routers.AppRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl  
  },
  
  routes: {
    "profile/:id" : "userShow",
    "game" : "sketchNew",
    "game/:id" : "sketchShow",
    'white_cards/vote' : "cardsIndex",
    "about" : "about"
  },
  
  // home: function(){
  //   if (currentUserID){
  //     var user = SketchMate.users.getOrFetch(id);
  //   } else {
  //     var user = "guest"
  //   }
  //   var homeView = new SketchMate.Views.Home({
  //     model: user
  //   });
  // 
  //   this._swapView(homeView)
  // },
  
  sketchShow: function(id){
    var sketch = SketchMate.sketches.getOrFetch(id);
    sketch.fetch();
    
    var sketchView = new SketchMate.Views.ShowSketch({
      model: sketch,
      cards: sketch.whiteCards(),
    })
    
    this._swapView(sketchView);
  },
  
  userShow: function(id){
    var user = SketchMate.users.getOrFetch(id);
    var route = this;
    user.fetch({
      success: function(){
        var userView = new SketchMate.Views.ShowUser({
          model: user,
        })
    
        route._swapView(userView);
      }
    }); 
  },
  
  sketchNew: function(){
    var newSketch = new SketchMate.Models.Sketch();
    
    var newSketchView = new SketchMate.Views.NewSketch({
      model: newSketch
    });
    
    this._swapView(newSketchView);
  },
    
  cardsIndex: function(){
    var allWhiteCards = SketchMate.allWhiteCards;

    var allWhiteCardsView = new SketchMate.Views.IndexWhiteCards({
      collection: allWhiteCards
    });
    
    allWhiteCards.fetch()
    this._swapView(allWhiteCardsView)
  },
  
  about: function(){
   var aboutView = new SketchMate.Views.About()
   this._swapView(aboutView)
  },
  
  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    this.$rootEl.html(view.render().$el)
  }
})