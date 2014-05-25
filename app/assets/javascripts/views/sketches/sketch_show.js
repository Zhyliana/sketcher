SketchMate.Views.ShowSketch = Backbone.CompositeView.extend({
  template: JST["sketches/show"],
  className: "show-sketch",
  collection: SketchMate.Collections.Sketches,
  events: {
    "click .playable-cards .card" : "selectCard",
    "click .playable-cards .selected" : "deSelectCard",
    "click  .submit-new-sketch-card-assoc-btn" : "submitCardSketchAssoc"
  },
  
  initialize: function(options){
    this.listenTo(this.model, "sync add remove", this.render);
    this.listenTo(this.model.whiteCards(), "sync add", this.addWhiteCard);
  
    this.addPlayableCards()
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
          view.renderPlayableCard(card)
        });
      }
    });
  },
  
  renderPlayableCard: function(card){
    var playableWhiteCardShowView =  new SketchMate.Views.ShowWhiteCard({ 
      model: card,
      sketch: this.model,
    });
    
    this.addSubview(".playable-cards", playableWhiteCardShowView) 
  },
  
  selectCard: function(event){
    $(event.target).addClass("selected")
    $(event.target).siblings().removeClass("selected")
  },
  
  deSelectCard: function(event){
    $(event.target).removeClass("selected")
  },
  
  submitCardSketchAssoc: function(event){
    var cardID = JSON.parse($(".selected").attr("id"));
    var sketchID = this.model.id;
    var userID = currentUserID;
    debugger
  },
  
  
  submitCardSketchAssoc: function(event){ 
    event.preventDefault()
    
    var view = this;
    var cardID = JSON.parse($(".selected").attr("id"));
    var sketchID = this.model.id;
    var userID = currentUserID;

    var newAssoc  = new SketchMate.Models.CardSketchAssignment();
      
    newAssoc.set({
      white_card_id: cardID,
      sketch_id: sketchID,
      user_id: currentUserID,
    });
    
    newAssoc.save({},{
      success: function(){
        alert("newAssocMAde")
        // Backbone.history.navigate("#/sketch/" + newSketch.id, { trigger: true })
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