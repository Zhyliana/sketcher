SketchMate.Views.About = Backbone.CompositeView.extend({
  template: JST["info/about"],
  
  render: function(){
    var renderedContent = this.template();
  
    this.$el.html(renderedContent);
    this.attachSubviews();
  
    return this;
  },
})