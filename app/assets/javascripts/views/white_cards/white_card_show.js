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
    this.listenTo(this.model, "sync add remove change:total_votes change:user_votes change:userVotes", this.render);
  },
  
  render: function(){
    var renderedContent = this.template({
      white_card: this.model
    });

    this.$el.html(renderedContent);
    
    if(this.model.userVotes.user_id === currentUserID){
      var userVote = this.model.userVotes.vote_value
      if(userVote === 1){
        this.$el.find(".card-votes").toggleClass("upvoted")
        this.$el.find(".upvote").toggleClass("upvoted")
      } else if (userVote === -1) {
        this.$el.find(".card-votes").toggleClass("downvoted")
        this.$el.find(".downvote").toggleClass("upvoted")
      }
    }
  
    return this;
  },
  
  updateVotes: function (originalValue, voteValue) {
    this.userVotes += (voteValue - originalValue)

    if (this.userVotes > 0) { 
      return "+" + this.userVotes
    } else {
      return this.userVotes.toString();
    }
  },
  
  saveUserVote: function (value) {
    this.model.userVote = new SketchMate.Models.UserVote({
    // this.model.userVote.set({
      user_id: currentUserID,
      white_card_id: this.model.get('id'),
      value: value
    });
  },
  
  userVoteValue: function () {
    return this.model.userVotes.vote_value || 0
  },
  
  
  upvote: function(event){
    //KEN'S STUFF
    event.stopImmediatePropagation();

    var originalUserVoteValue = this.userVoteValue();
    var that = this;

    //fix later: refactor upvote/downvote
    // if userVote has voted before
    if (this.model.userVotes.id) {
      // cancel upvote if upvoted already
      if (this.model.userVotes.vote_value === 1) {
        
        this.saveUserVote(0);
        
        this.model.userVote.save({}, {
          success: function () {
            var commentVoteText = that.updateVotes(originalUserVoteValue, 0);
            // $('.comment-' + that.model.get('id') + '-votes').html(commentVoteText);
        // 
        //     $('.comment-' + that.model.get('id') + '-upvote').removeClass('upvoted');
          }
        });
      } else { //otherwise, upvote
        this.saveUserVote(1);

        this.model.userVote.save({}, {
          success: function () {
            var commentVoteText = that.updateVotes(originalUserVoteValue, 1);
            // $('.comment-' + that.model.get('id') + '-votes').html(commentVoteText);
           // 
           //  $('.comment-' + that.model.get('id') + '-upvote').addClass('upvoted');
           //  $('.comment-' + that.model.get('id') + '-downvote').removeClass('downvoted');
          }
        });        
      }
    } else {  //never voted before
      this.saveUserVote(1);

      this.model.userVote.save({}, {
        success: function () {
          var commentVoteText = that.updateVotes(originalUserVoteValue, 1);
          // $('.comment-' + that.model.get('id') + '-votes').html(commentVoteText);
          // 
          // $('.comment-' + that.model.get('id') + '-upvote').addClass('upvoted');
        }
      });
    }
    
    
    
    
    
    
    /// MY OLD STUFF
    // var view = this;
  //   var whiteCard = this.model;
  //   var thumb = $(event.target);
  //   var currVote = JSON.parse(thumb.siblings(".card-votes").text())
  //   var $totalVotes = thumb.parent().find(".card-votes")
  // 
  //   if(whiteCard.userVotes.user_id === currentUserID){
  //     var updatedVote = new SketchMate.Models.UserVote(whiteCard.userVotes)
  //     // debugger
  //     updatedVote.destroy({
  //       success: function(){
  //         $totalVotes.toggleClass("upvoted")
  //         thumb.parent().find(".upvote").toggleClass("upvoted")
  //         // thumb.parent().find(".card-votes").text(currVote - 1)
  //         whiteCard.userVotes = {}
  //         whiteCard.save({user_votes: {}},{})
  //         delete whiteCard.user_votes
  //         whiteCard.fetch()
  //         alert("updatedVote Destroyed" + thumb.parent().find(".card-votes").text())
  //         // debugger
  //       }
  //     })
  //   } else {      
  //     var newVoteModel = new SketchMate.Models.UserVote({
  //       user_id: currentUserID,
  //       white_card_id: this.model.escape("id"),
  //       vote_value: + 1,
  //     });
  // 
  //     newVoteModel.save({},{
  //       success: function(){
  //         $totalVotes.toggleClass("upvoted")
  //         thumb.parent().find(".upvote").toggleClass("upvoted")
  //         // thumb.parent().find(".card-votes").text(currVote + 1)
  //         whiteCard.userVotes = newVoteModel.toJSON()
  //         whiteCard.save({user_votes: newVoteModel.toJSON()},{})
  //         whiteCard.fetch()
  //         // whiteCard.user_votes.add(newVoteModel.toJSON())
  //         alert("newVoteModelSave" + thumb.parent().find(".card-votes").text())
  //       }
  //     })
  //   }
   
    // this.render()

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