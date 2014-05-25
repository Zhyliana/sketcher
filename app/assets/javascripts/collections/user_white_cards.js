SketchMate.Collections.UserWhiteCards = Backbone.Collection.extend({
  model: SketchMate.Models.WhiteCard,
  url: "/api/sketches/",
  
  initialize: function(models, options) { 
    this.user = options.user; 
  }, 
});