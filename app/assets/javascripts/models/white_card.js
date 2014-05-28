SketchMate.Models.WhiteCard = Backbone.Model.extend({
  urlRoot: "/api/white_cards",
  
  initialize: function (attr, options) {
    this.userVote = attr.votes
  },
  
  
   parse: function (jsonResp) {
    if (jsonResp.votes) {
      this.userVote = jsonResp.votes

      delete jsonResp.userVote
    }
    
     return jsonResp;
  }
})