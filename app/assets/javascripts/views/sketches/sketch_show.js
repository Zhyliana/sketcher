SketchMate.Views.ShowSketch = Backbone.CompositeView.extend({
  template: JST["sketches/show"],
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
    this.addSubview(".played-cards", whiteCardShowView);
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
  
  selectCard: function(event) {
    $(event.currentTarget).addClass("selected")
    $(event.currentTarget).siblings().removeClass("selected")
  },
  
  deSelectCard: function(event){
    $(event.currentTarget).removeClass("selected")
  },
  
  submitCardSketchAssoc: function(event){ 
    event.preventDefault()
    
    var cardID = JSON.parse($(".selected").attr("id"));
    var sketchID = this.model.id;
    var newAssoc  = new SketchMate.Models.CardSketchAssignment();
      
    newAssoc.save({
      white_card_id: cardID,
      sketch_id: sketchID,
      user_id: currentUserID,
    }, { success: function(){
        Backbone.history.navigate("#/game", { trigger: true })
      }
    });    
  },
    
  render: function(){
    var renderedContent = this.template({
      sketch: this.model
    })
    
    this.$el.html(renderedContent)
    this.attachSubviews();
    
    $( ".playable-cards .card" ).sortable();
    $( ".playable-cards .card" ).disableSelection();
    
    return this
  },
  
})