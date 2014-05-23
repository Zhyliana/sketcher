SketchMate.Views.ShowSketch = Backbone.CompositeView.extend({
  template: JST["sketches/show"],
  className: "show-sketch",
  collection: SketchMate.Collections.Sketches,
  
  events: {
    "click .upvote" : "upvote",
    "click .downvote" : "downvote",
  },
  
  initialize: function(options){
    this.listenTo(this.model, "sync add remove", this.render);
    this.listenTo( this.model.whiteCards(), "sync add", this.addCard);
    
    this.model.whiteCards().each(this.addWhiteCard.bind(this));
  },
  
  addWhiteCard: function(card){

      var whiteCardShowView =  new SketchMate.Views.ShowWhiteCard({ model: card });   
      this.addSubview(".cards", whiteCardShowView);
    },
  
  render: function(){

    var renderedContent = this.template({
      sketch: this.model
    })
    
    this.$el.html(renderedContent)

    this.attachSubviews();

    return this
  },
  
  upvote: function(event){
    var currVotes = this.model.get("votes")
    this.model.save({
      votes: currVotes + 1
    })
    alert(this.model.get("votes"))
  },
  
  downvote: function(event){
    var votes = this.model.get("votes")
    this.model.save({
      votes: votes - 1
    })
    alert(this.model.get("votes"))
  },
  
})