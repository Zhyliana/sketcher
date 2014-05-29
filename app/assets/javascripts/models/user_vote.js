SketchMate.Models.UserVote = Backbone.Model.extend({
  urlRoot: function(){
    return "api/white_cards/" + this.whiteCardID + "/user_votes"
  },
  
  initialize: function(options){
    this.whiteCardID = options.white_card_id
  },
})