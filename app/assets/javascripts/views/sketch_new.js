SketchMate.Views.NewSketch = Backbone.View.extend({
  template: JST["sketches/new"],
  className: "drawing-area",
  collection: SketchMate.Collections.Sketches,
  
  events: {
    "click button#new-drawing" : "submit"
  },
  
  render: function(){
    var renderedContent = this.template()
    debugger
    this.$el.html(renderedContent)
    
    return this
  },
  
  submit: function(){   
  }
  
})