SketchMate.Collections.Users = Backbone.Collection.extend({
  model: SketchMate.Models.User, 
  url: "/users",
  
  getOrFetch: function(id){
    var model;
    var collection = this;
  
    if(model = this.get(id)){
      model.fetch();
      return model;
    } else {
      model = new SketchMate.Models.User({id: id});
      model.fetch({
        success: function(){
          collection.add(model)
        }
      });
      return model;
    }
  },
})

SketchMate.users = new SketchMate.Collections.Users();
