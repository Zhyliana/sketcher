SketchMate.Collections.WhiteCards = Backbone.Collection.extend({
  model: SketchMate.Models.WhiteCard, 
  url: "/api/white_cards",
  
  initialize: function(models, options) { 
    this.sketch = options.sketch;
  }
})