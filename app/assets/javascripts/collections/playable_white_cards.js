SketchMate.Collections.PlayableWhiteCards = Backbone.Collection.extend({
  model: SketchMate.Models.WhiteCard, 

  url: "/api/white_cards",
  
  // comparator: function(card){
  //   return card.get("votes")
  // },
  
  initialize: function(models, options) { 
    debugger
  },
})