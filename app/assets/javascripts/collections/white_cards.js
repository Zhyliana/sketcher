SketchMate.Collections.WhiteCards = Backbone.Collection.extend({
  model: SketchMate.Models.WhiteCard, 
  url: function(){
    if(this.sketch){
      return this.sketch.url() + "/white_cards"
    } else {
      return "/api/white_cards"
    }
  },
  

  initialize: function(models, options) { 
    this.sketch = options.sketch;
  }
})