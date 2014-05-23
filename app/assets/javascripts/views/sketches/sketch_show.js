SketchMate.Views.ShowSketch = Backbone.View.extend({
  template: JST["sketches/show"],
  className: "drawing-area",
  collection: SketchMate.Collections.Sketches,
  
  initialize: function(options){
  },
  
  events: {
    "click button#upvote" : "upvote",
    "click button#downvote" : "downvote"
  },
  
  render: function(){
    var renderedContent = this.template({
      sketch: this.model
    })
    this.$el.html(renderedContent)
    
    return this
  },
  
  upvote: function(event){
    var votes = this.model.votes()
    this.model.set({
      votes: votes + 1
    })
  },
  
  downvote: function(event){
    var votes = this.model.votes()
    this.model.set({
      votes: votes - 1
    })
  },
})