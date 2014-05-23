SketchMate.Views.ShowSketch = Backbone.View.extend({
  template: JST["sketches/show"],
  className: "show-sketch",
  collection: SketchMate.Collections.Sketches,
  
  initialize: function(options){
    this.listenTo(this.model, "sync add remove", this.render); 
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
  
  showSketch: function(){
    
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