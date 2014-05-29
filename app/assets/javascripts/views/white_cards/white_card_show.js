SketchMate.Views.ShowWhiteCard = Backbone.View.extend({
  template: JST["white_cards/show"],
  className: "card panel panel-default",
  // collection: SketchMate.Collections.WhiteCards({ white_}),
  
  attributes: function(){
    return { id: this.model.escape("id")}
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
    // this.model.userVotes.forEach(function(userVote){ 
    //   if( userVote.user_id === currentUserID){
    //     // userVote.save({vote_value: 0}, {})
    //     alert(userVote.vote_value + this.model.totalVotes)
    //   }
    // })
    var whiteCard = this.model;
    var thumbs = $(event.target);
    var newVote  = true
    debugger

    if(whiteCard.userVotes.user_id === currentUserID){
      newVote = false

      var updatedVote = new SketchMate.Models.UserVote(whiteCard.userVotes)

      updatedVote.destroy({
        success: function(){
          delete userVote
          $(".upvote").css("color", "black")
        }
      })
    }  
      
    if(newVote){
      debugger
      var upvote = new SketchMate.Models.UserVote({
        user_id: currentUserID,
        white_card_id: this.model.escape("id"),
        vote_value: + 1,
      });
  
      upvote.save({},{
        success: function(){
          $(".upvote").css("color", "rgb(136, 146, 252)")
        }
      })
    }

  },

  
  downvote: function(event){
    var downvote = new SketchMate.Models.UserVote({
      whiteCard: this.model
    });
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