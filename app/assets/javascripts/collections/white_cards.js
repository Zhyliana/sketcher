SketchMate.Collections.WhiteCards = Backbone.Collection.extend({
  model: SketchMate.Models.WhiteCard, 

  url: function(){
    if (this.sketch){
      return "/api/sketches/" + this.sketch.id + "/white_cards"
    } else {
      return "/api/white_cards"
    }
  },
  
  // comparator: function(card){
  //   return card.get("votes")
  // },
  
  initialize: function(models, options) { 
    if (options){
      this.sketch = options.sketch;
    } 
  },
})

SketchMate.allWhiteCards = new SketchMate.Collections.WhiteCards();