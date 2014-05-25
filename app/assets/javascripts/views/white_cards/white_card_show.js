SketchMate.Views.ShowWhiteCard = Backbone.View.extend({
  template: JST["white_cards/show"],
  className: "card panel panel-default",
  // collection: SketchMate.Collections.WhiteCards,
  // 
  attributes: function(){
    return { id: this.model.get("id")}
  },
   
  
  events: {
    "click .upvote" : "upvote",
    "click .downvote" : "downvote",
  },
  
  initialize: function(options){
    this.sketch = options.sketch;
    this.listenTo(this.model, "sync add remove change:votes", this.render);
  },
  
  render: function(){
    var renderedContent = this.template({
      white_card: this.model
    });

    this.$el.html(renderedContent);
  
    return this;
  },
  
  upvote: function(event){
    var currVotes = this.model.get("votes")
    this.model.save({
      votes: currVotes + 1
    })
  },
  
  downvote: function(event){
    var currVotes = this.model.get("votes")
    this.model.save({
      votes: currVotes - 1
    })
  },
  
})