SketchMate.Views.NewSketch = Backbone.View.extend({
  template: JST["sketches/new"],
  className: "drawing-area",
  collection: SketchMate.Collections.Sketches,
  
  initialize: function(options){
  },
  
  events: {
    "click button#submit-drawing-button" : "submit"
  },
  
  
  render: function(){
    var renderedContent = this.template()
    this.$el.html(renderedContent)
    
    return this
  },
  
  submit: function(event){ 
    event.preventDefault()
    
    var canvas = $("#my-canvas")[0].toDataURL();
    var newSketch = new SketchMate.Models.Sketch();
      
    newSketch.set({
      data_url: canvas,
      votes: 0
    });
    
    newSketch.save({},{
      success: function(){
        // SketchMate.sketches.add(newSketch);
        Backbone.history.navigate("#/sketch/" + newSketch.id, { trigger: true })
      }
    });    
  }
  
})