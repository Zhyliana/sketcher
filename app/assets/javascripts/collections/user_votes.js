SketchMate.Collections.WhiteCards = Backbone.Collection.extend({
  model: SketchMate.Models.WhiteCard, 
  url: function(){
    return this.whiteCard.url() + "/user_votes"
  },
  
  getOrFetch: function(id){
    var model;
    var collection = this;
  
    if(model = this.get(id)){
      model.fetch();
      return model;
    } else {
      model = new SketchMate.Models.WhiteCard({id: id});
      model.fetch({
        success: function(){
          collection.add(model)
        }
      });
      return model;
    }
  },
})
