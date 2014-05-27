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
  
  getOrFetch: function(id){
    var model;
    var collection = this;

    if(model = this.get(id)){
      model.fetch();
      return model;
    } else {
      model = new SketchMate.Models.Sketch({id: id});
      model.fetch({
        success: function(){
          collection.add(model)
        }
      });
      return model;
    }
  },
})

SketchMate.allWhiteCards = new SketchMate.Collections.WhiteCards();