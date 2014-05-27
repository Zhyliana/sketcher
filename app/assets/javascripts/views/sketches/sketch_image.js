SketchMate.Views.ImageSketch = Backbone.CompositeView.extend({
  template: JST["sketches/image"],
  className: "col-xs-4",
  
  collection: SketchMate.Collections.Sketches,

  render: function(){
    var renderedContent = this.template({
      sketch: this.model
    })
    
    this.$el.html(renderedContent)
    this.attachSubviews();
    
    return this
  },
  
})