SketchMate.Views.Home = Backbone.CompositeView.extend({
  template: JST["root/home"],
 
  initialize: function(options){
    // var currentUser = options.user
    // var nextSketchID = Math.floor(SketchMate.sketches.length * Math.random()) + 1;
  },
  
  
  // addSketch: function(sketch){
//     var sketchView =  new SketchMate.Views.ImageSketch({model: sketch});
//     this.addSubview(".user-sketches", sketchView)
//   },
  
  render: function(){
    var renderedContent = this.template({
      // user: this.model
    });
  
    this.$el.html(renderedContent);
    // this.attachSubviews();
  
    return this;
  },
})