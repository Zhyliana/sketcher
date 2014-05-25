SketchMate.Views.ShowSketch = Backbone.CompositeView.extend({
  template: JST["sketches/show"],
  className: "show-sketch",
  collection: SketchMate.Collections.Sketches,
  
  initialize: function(options){
    this.listenTo(this.model, "sync add remove", this.render);
    this.listenTo(this.model, "sync add remove", this.addPlayableCards);
    this.listenTo(this.model.whiteCards(), "sync add", this.addWhiteCard);
  
 
    this.model.whiteCards().each(this.addWhiteCard.bind(this));
    
  },
  
  addWhiteCard: function(card){    
    var whiteCardShowView =  new SketchMate.Views.ShowWhiteCard({ model: card });  
    this.addSubview(".cards", whiteCardShowView);
  },
  
  addPlayableCards: function(){
    var currSketch = this.model;
    var play = new SketchMate.Collections.PlayableWhiteCards([], {sketch: currSketch});
    var view = this;
    play.fetch({
      success: function(){
        play.forEach(function(card){
          alert("play")
          var playableWhiteCardShowView =  new SketchMate.Views.ShowWhiteCard({ 
            model: card,
            sketch: currSketch,
          }); 
          view.addSubview(".playable-cards", playableWhiteCardShowView); 
        })
      }
    });
  
  },
  
  render: function(){
    var renderedContent = this.template({
      sketch: this.model
    })
    
    this.$el.html(renderedContent)
    this.attachSubviews();
    
    return this
  },
  
})