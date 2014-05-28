SketchMate.Views.ShowWhiteCard = Backbone.View.extend({
  template: JST["white_cards/show"],
  className: "card panel panel-default",
  // collection: SketchMate.Collections.WhiteCards,
  // 
  attributes: function(){
    return { id: this.model.get("id")}
  },
   
  
  events: {
    "click div.upvote" : "upvote",
    "click div.downvote" : "downvote",
  },
  
  initialize: function(options){
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
    var upvote = new SketchMate.Models.UserVote();
    var thumbsUp = $(event.target);
    var votes = $(event.target).parent().parent().children(".card-votes")
    debugger
    upvote.save({
      user_id: currentUserID,
      white_card_id: this.model.escape("id"),
      vote_value: +1
    },{
      success: function(){
        debugger
        votes.siblings().children().css("color", "black")
        thumbsUp.parent().removeClass( "upvote" )
        thumbsUp.css("color", "rgb(234, 126, 89)")
        votes.css("color", "rgb(234, 126, 89)")
        var vote = JSON.parse(votes.text())
        votes.text(vote + 1)
      }
    })
  },
  
  downvote: function(event){
    var downvote = new SketchMate.Models.UserVote();
    var thumbsDown = $(event.target);
    var votes = $(event.target).parent().parent().children(".card-votes")
    
    downvote.save({
      user_id: currentUserID,
      white_card_id: this.model.escape("id"),
      vote_value: - 1
    },{
      success: function(){
        votes.siblings().children().css("color", "black")
        thumbsDown.parent().removeClass( "downvote" )
        thumbsDown.css("color", "rgb(136, 146, 252)")
        votes.css("color", "rgb(136, 146, 252)")
        var vote = JSON.parse(votes.text());
        votes.text(vote - 1)
      }
    })
  },
  
})