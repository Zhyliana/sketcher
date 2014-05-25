SketchMate.Collections.PlayableWhiteCards = Backbone.Collection.extend({
  model: SketchMate.Models.WhiteCard,
  
  initialize: function(models, options) { 
    this.sketch = options.sketch; 
  },
  
  url: function(){
    return "/api/sketches/" + this.sketch.id + "/playable_cards"
  },
})