SketchMate.Views.ShowWhiteCard = Backbone.View.extend({
  template: JST["white_cards/show"],
  className: "card panel panel-default",
  // collection: SketchMate.Collections.WhiteCards({ white_}),
  userVotesColl: function(){
    var userVotesColl = new SketchMate.Collections.UserVotes({
      whiteCard: this.model
    })
    alert("userVotes COll")
    return userVotesColl
  },
  
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
    
    whiteCard.userVotes.forEach(function(userVote){ 
      if(userVote.user_id === currentUserID){
        alert("found")
        var updatedVote = new SketchMate.Models.UserVote(userVote)

        updatedVote.save({vote_value: 0},{
          success: function(){
            alert("updatedVote Saved")
          }
        })
      }
    })
    
    
    // var upvote = new SketchMate.Models.UserVote({
    //   user_id: currentUserID,
    //   white_card_id: this.model.escape("id"),
    //   vote_value: + 1,
    //   whiteCard: this.model
    // });
    // upvote.save({},{
    //   success: function(){
    //     alert("upvoted")
    //   }
    // })
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