SketchMate.Models.UserVote = Backbone.Model.extend({
  url: function(){
    return this.whiteCard.url() + "/user_votes"
  },
  
  initialize: function(options){
    this.whiteCard = options.whiteCard
  },
})