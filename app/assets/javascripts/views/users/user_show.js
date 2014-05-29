SketchMate.Views.ShowUser = Backbone.CompositeView.extend({
  template: JST["users/show"],
  className: "user",
  collection: SketchMate.Collections.Users,
  // 
  // attributes: function(){
  //   return { id: this.model.get("id")}
  // },
  // 

  initialize: function(options){
    this.listenTo(this.model, "sync add remove change:votes", this.render);

    this.model.userWhiteCards().each(this.addWhiteCard.bind(this));
    this.model.userSketches().each(this.addSketch.bind(this));
  },
  
  addWhiteCard: function(card){
    var whiteCardShowView = new SketchMate.Views.ShowWhiteCard({ model: card });  
    this.addSubview(".user-cards", whiteCardShowView);
  },
  
  addSketch: function(sketch){
    var sketchView =  new SketchMate.Views.ImageSketch({model: sketch});
    this.addSubview(".user-sketches", sketchView)
  },
  
  render: function(){
    var renderedContent = this.template({
      user: this.model
    });
  
    this.$el.html(renderedContent);
    this.attachSubviews();
  
    return this;
  },
})