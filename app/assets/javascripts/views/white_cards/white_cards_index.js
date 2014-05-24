SketchMate.Views.IndexWhiteCards = Backbone.CompositeView.extend({
  model: SketchMate.Models.WhiteCard, 
  template: JST["white_cards/index"],
  
  initialize: function(options){
    this.listenTo(this.collection, "sync",  this.render);
    this.listenTo(this.collection, "add", this.addCardView);
    
    var view = this;
    
    this.collection.each(function(card){
      view.addCardView(card);
    });
  },
  
  addCardView: function(card){
    var cardShowView = new SketchMate.Views.ShowWhiteCard({ model: card });
    this.addSubview("#all-cards", cardShowView)
  },
  
  render: function(){
    var renderedContent = this.template({
      cards: this.collection
    });
      
    this.$el.html(renderedContent);   
    this.attachSubviews();   
    return this;
  },
   
})