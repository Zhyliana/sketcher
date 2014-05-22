SketchMate.Views.NewSketch = Backbone.View.extend({
  template: JST["sketches/new"],
  className: "drawing-area",
  collection: SketchMate.Collections.Sketches,
  
  events: {
    "click button#submit-drawing-button" : "submit"
  },
  
  render: function(){
    var renderedContent = this.template()
    this.$el.html(renderedContent)
    
    return this
  },
  
  submit: function(){ 
    var canvas = $("#my-canvas")[0].toDataURL();
    this.model.set({
      data_url: canvas
    });
    
    this.model.save({},{
      success: alert("saved!")
    });
  }
  
})