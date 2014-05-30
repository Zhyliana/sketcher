SketchMate.Views.ShowWhiteCard = Backbone.View.extend({
  template: JST["white_cards/show"],
  className: "card panel panel-default",
  // collection: SketchMate.Collections.WhiteCards({ white_}),
  
  attributes: function(){
    return { id: this.model.escape("id")}
  },
   
  
  events: {
    "click .card-vote.upvote" : "upvote",
    "click .card-vote.downvote" : "downvote",
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
        this.$el.find(".downvote").toggleClass("downvoted")
      }
    }
  
    return this;
  },

  upvote: function(event){
    var view = this;
    var whiteCard = this.model;
    var thumb = $(event.target);
    var currVote = JSON.parse(thumb.siblings(".card-votes").text())
    var $totalVotes = thumb.parent().find(".card-votes")
  
    if(whiteCard.userVotes.user_id === currentUserID){
      var updatedVote = new SketchMate.Models.UserVote(whiteCard.userVotes)
      updatedVote.destroy({
        success: function(){ 
          thumb.parent().find(".card-votes").text(currVote - 1)   
          whiteCard.userVotes = {}
          whiteCard.attributes.user_votes = {}
          whiteCard.save({user_votes: {}},{})
          // delete whiteCard.userVotes
          whiteCard.fetch()
        }
      })
    } else {      
      var newVoteModel = new SketchMate.Models.UserVote({
        user_id: currentUserID,
        white_card_id: this.model.escape("id"),
        vote_value: + 1,
      });
      newVoteModel.save({},{
        success: function(){
          thumb.parent().find(".card-votes").text(currVote + 1)
          whiteCard.userVotes = newVoteModel.toJSON()
          whiteCard.attributes.user_votes = newVoteModel.toJSON()
          whiteCard.save({user_votes: newVoteModel.toJSON()},{})
          whiteCard.fetch()
          // whiteCard.userVotes.add(newVoteModel.toJSON())
          // alert("newVoteModelSave" + thumb.parent().find(".card-votes").text())
        }
      })
    }
    
    $totalVotes.toggleClass("upvoted")
    thumb.parent().find(".upvote").toggleClass("upvoted")
    //    
    // this.render()
  },

  
  downvote: function(event){
    var view = this;
    var whiteCard = this.model;
    var thumb = $(event.target);
    var currVote = JSON.parse(thumb.siblings(".card-votes").text())
    var $totalVotes = thumb.parent().find(".card-votes")
  
    if(whiteCard.userVotes.user_id === currentUserID){
      var updatedVote = new SketchMate.Models.UserVote(whiteCard.userVotes)
      updatedVote.destroy({
        success: function(){ 
          thumb.parent().find(".card-votes").text(currVote + 1)   
          whiteCard.userVotes = {}
          whiteCard.attributes.user_votes = {}
          whiteCard.save({user_votes: {}},{})
          // debugger
          // delete whiteCard.userVotes
          // whiteCard.fetch()
        }
      })
    } else {      
      var newVoteModel = new SketchMate.Models.UserVote({
        user_id: currentUserID,
        white_card_id: this.model.escape("id"),
        vote_value: - 1,
      });
      newVoteModel.save({},{
        success: function(){
          thumb.parent().find(".card-votes").text(currVote - 1)
          whiteCard.userVotes = newVoteModel.toJSON()
          whiteCard.attributes.user_votes = newVoteModel.toJSON()
          whiteCard.save({user_votes: newVoteModel.toJSON()},{})
          // whiteCard.fetch()
          $totalVotes.toggleClass("downvoted")
          // whiteCard.userVotes.add(newVoteModel.toJSON())
          // alert("newVoteModelSave" + thumb.parent().find(".card-votes").text())
        }
      })
    }
    
    $totalVotes.toggleClass("downvoted")
    thumb.parent().find(".downvote").toggleClass("downvoted")
    //    
    // this.render()
  },
  
})