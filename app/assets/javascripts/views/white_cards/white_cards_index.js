SketchMate.Views.IndexWhiteCards = Backbone.CompositeView.extend({
  model: SketchMate.Models.WhiteCard, 
  template: JST["white_cards/index"],
  className: "container",
  
  initialize: function(options){
    this.listenTo(this.collection, "sync reset sort",  this.render);
    this.listenTo(this.collection, "add", this.addCardView);
    
    var view = this;

    this.collection.each(function(card){
      view.addCardView(card);
    });
  },
  
  addCardView: function(card){
    var cardShowView = new SketchMate.Views.ShowWhiteCard({ model: card });
    this.addSubview(".cards", cardShowView)
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
