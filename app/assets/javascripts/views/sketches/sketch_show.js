SketchMate.Views.ShowSketch = Backbone.View.extend({
  template: JST["sketches/show"],
  className: "show-sketch",
  collection: SketchMate.Collections.Sketches,
  
  initialize: function(options){
    // this.listenTo(this.model, "sync add remove", this.render);
  },
  
  events: {
    "click .upvote" : "upvote",
    "click .downvote" : "downvote",
  },
  
  render: function(){

    var renderedContent = this.template({
      sketch: this.model
    })
    
    this.$el.html(renderedContent)

    return this
  },
  
  upvote: function(event){
    var currVotes = this.model.get("votes")
    this.model.save({
      votes: currVotes + 1
    })
    alert(this.model.get("votes"))
  },
  
  downvote: function(event){
    var votes = this.model.get("votes")
    this.model.save({
      votes: votes - 1
    })
    alert(this.model.get("votes"))
  },
  
})