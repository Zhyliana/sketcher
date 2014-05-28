SketchMate.Views.ShowWhiteCard = Backbone.View.extend({
  template: JST["white_cards/show"],
  className: "card panel panel-default",
  // collection: SketchMate.Collections.WhiteCards,
  // 
  attributes: function(){
    return { id: this.model.get("id")}
  },
   
  
  events: {
    "click .upvote" : "upvote",
    "click .downvote" : "downvote",
  },
  
  initialize: function(options){
    // this.sketch = options.sketch;
    this.listenTo(this.model, "sync add remove change:votes", this.render);
  },
  
  render: function(){
    var renderedContent = this.template({
      white_card: this.model
    });

    this.$el.html(renderedContent);
  
    return this;
  },
  
  upvote: function(event){
    var upvote = new SketchMate.Models.UserVote()
    
    upvote.save({
      user_id: currentUserID,
      white_card_id: this.model.escape("id"),
      vote_value: +1
    })
    
        debugger
  },
  
  downvote: function(event){
    var currVotes = this.model.get("votes")
    this.model.save({
      votes: currVotes - 1
    })
  },
  
})