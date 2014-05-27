SketchMate.Views.NewSketch = Backbone.CompositeView.extend({
  template: JST["sketches/new"],
  className: "drawing-area",
  collection: SketchMate.Collections.Sketches,

  events: {
    "click .paint" : "pickColor",
    "click .brush" : "pickBrush",
    "mousedown #my-canvas" : "beginDrawing",
    "mousemove #my-canvas" : "draw",
    "mouseup #my-canvas" : "stopDrawing",
    "click #submit-drawing-button" : "submit",
  },
  
  initialize: function(){
   // this.listenTo(this, 'inDOM', this.createSketch);
    this.selectPromptCard()
  },
  
  render: function(){
    var renderedContent = this.template()
    this.$el.html(renderedContent)
    
    return this
  },
  
  selectPromptCard: function(){
    var card;
    var view = this;
    var cards = new SketchMate.Collections.WhiteCards();
    cards.fetch({
      success: function(){
        var randID = Math.floor(cards.length * Math.random()) + 1;
        card = cards.getOrFetch(randID)
        view.renderCard(card)
      }
    })
  },
  
  renderCard: function(card){
    var promptCardShowView =  new SketchMate.Views.ShowWhiteCard({ 
      model: card
    });
    
    this.addSubview(".prompt-card", promptCardShowView) 
  },
  
  drawable: function (event) {
    if (!this["hasBeenDone"]) {
      this.hasBeenDone = true
      this.canvas = $("#my-canvas")[0];
      this.ctx = $("#my-canvas")[0].getContext("2d");
      this.ctx.strokeStyle = "black"; 
      this.ctx.lineWidth = 10;
      this.ctx.lineCap = 'round'; 
      this.canvasOffset = $("#my-canvas").offset();
    }
  },
  
  pickColor: function(event){
    var color = event.target.id; 
         
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(event.pageX - this.canvasOffset.left, event.pageY - this.canvasOffset.top);
  },
  
  pickBrush: function(event){
    var width = JSON.parse(event.target.getAttribute("data-size-id"));
    this.ctx.lineWidth = width;
  },
  
  beginDrawing: function(event){
    this.drawable();
    this.drawing = true;
    this.ctx.beginPath();
  },
  
  draw: function(event){
    if (this.drawing === true) {
      this.ctx.lineTo(event.pageX - this.canvasOffset.left, event.pageY - this.canvasOffset.top);
      this.ctx.stroke();
    }
  },
  
  stopDrawing: function(){
    this.drawing = false;
  },

  submit: function(event){ 
    event.preventDefault()
    var view = this;
    var canvas = $("#my-canvas")[0].toDataURL();
    var newSketch = new SketchMate.Models.Sketch();
      
    newSketch.set({
      image: canvas,
      votes: 0
    });
    
    newSketch.save({},{
      success: function(){
        SketchMate.sketches.add(newSketch);
        var nextSketchID = Math.floor(SketchMate.sketches.length * Math.random()) + 1;

        Backbone.history.navigate("#/sketch/" + nextSketchID, { trigger: true })
      }
    });    
  }
  
})