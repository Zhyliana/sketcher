SketchMate.Views.ShowWhiteCard = Backbone.View.extend({
  template: JST["cards/show"],
  className: "card",
  collection: SketchMate.Collections.WhiteCard,
  
  attributes: function(){
    return { id: this.model.get("id")}
  },
  
  render: function(){
    var renderedContent = this.template({
      white_card: this.model
    });
  
    this.$el.html(renderedContent);
  
    return this;
  },
  
})