SketchMate.Views.NewSketch = Backbone.CompositeView.extend({
  template: JST["sketches/new"],
  className: "drawing-area",
  collection: SketchMate.Collections.Sketches,

  events: {
    "mousedown #my-canvas" : "beginDrawing",
    "mousemove #my-canvas" : "drawFreeline",
    "mouseup #my-canvas" : "stopDrawing",
    "click .paint" : "pickColor",
    "click .brush" : "pickBrush",
    "click .stamp" : "changeStamp",
    "change #brush-slider" : "pickBrushSlider",
    "click #restart"  : "restartSketch",
    "click #submit-drawing-button" : "submit"
  },
  
  initialize: function(){
    this.brushSize = 10;
    this.stamp = "freeLine";
    this.color = "black";

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
  
  setUpCanvas: function (event) {
    if (!this["hasBeenDone"]) {
      this.hasBeenDone = true
      this.canvas = document.getElementById("my-canvas");
      this.ctx = this.canvas.getContext("2d");
      this.ctx.lineJoin = this.ctx.lineCap ='round';
      this.canvasOffset = $("#my-canvas").offset();
    }
  },
  
  beginDrawing: function(event){
    this.setUpCanvas();
    this.drawing = true;
    
    if (this.stamp === "circleStamp"){
      this.drawCircle(event);
    } else if (this.stamp === "squareStamp"){
      this.drawSquare(event);
    } else {
      this.ctx.beginPath();
    }
  },  
  
  changeStamp: function(event){
    this.stamp = event.target.id
  },
  
  pickColor: function(event){
    this.color = event.target.id;
  },
  
  pickBrush: function(event){
    this.brushSize = JSON.parse(event.target.getAttribute("data-size-id"));
  },
  
  pickBrushSlider: function(event){
    event.preventDefault();
    
    this.brushSize = JSON.parse($(event.currentTarget)[0].value);
    $("#current-brush-size").text(this.brushSize);
    $("#brush-slider").val(this.brushSize);
  },
  
  drawCircle: function(event){
    var x = event.pageX - this.canvasOffset.left;
    var y = event.pageY - this.canvasOffset.top;
    
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.brushSize/2, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.lineWidth = 0;
    this.ctx.stroke();
  },
  
  drawSquare: function(event){
    var mid = this.brushSize / 2;
    var x = event.pageX - this.canvasOffset.left - mid;
    var y = event.pageY - this.canvasOffset.top;
    
    this.ctx.beginPath();
    this.ctx.rect(x-(this.brushSize/2), y-(this.brushSize/2), this.brushSize, this.brushSize);
    this.ctx.fillStyle = this.ctx.strokeStyle = this.color;
    this.ctx.fill();
    this.ctx.lineWidth = 0;
    this.ctx.stroke();
  },
  
  drawFreeline: function(event){
    if (this.drawing === true && this.stamp === "freeLine"){
      var x = event.pageX - this.canvasOffset.left;
      var y = event.pageY - this.canvasOffset.top;
      
      this.ctx.strokeStyle = this.color; 
      this.ctx.lineWidth = this.brushSize;
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  },
  
  stopDrawing: function(){
    this.drawing = false;
  },
  
  restartSketch: function(){    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },

  submit: function(event){ 
    event.preventDefault()
    
    var view = this;
    var newSketch = new SketchMate.Models.Sketch();
    
    newSketch.save({
      image: canvas,
    },{
      success: function(){
        SketchMate.sketches.add(newSketch);
        var nextSketchID = Math.floor(SketchMate.sketches.length * Math.random()) + 1;

        Backbone.history.navigate("#/sketch/" + nextSketchID, { trigger: true })
      }
    });    
  }
  
})