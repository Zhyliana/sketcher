SketchMate.Views.ShowUser = Backbone.CompositeView.extend({
  template: JST["users/show"],
  className: "user",
  collection: SketchMate.Collections.Users,
  // 
  // attributes: function(){
  //   return { id: this.model.get("id")}
  // },
  // 
  
 
  initialize: function(options){
    this.listenTo(this.model, "sync add remove change:votes", this.render);
  },
  
  render: function(){
    debugger
    var renderedContent = this.template({
      user: this.model
    });
  
    this.$el.html(renderedContent);
  
    return this;
  },

})