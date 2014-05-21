FP.Views.NewDrawing = Backbone.View.extend({
  template: JST["drawings/new"],
  className: "drawing-area",
  // collection: FP.Collections.Drawings(),
  
  events: {
    "click button#new-drawing" : "submit"
  },
  
  render: function(){
    var renderedContent = this.template({})
    
    this.$el.html(renderedContent)
    
    return this
  },
  
  submit: function(){
    
  }
  
})