SketchMate.Models.Sketch = Backbone.Model.extend({
  urlRoot: "/api/sketches",
  is_image: function () {
    return (this.get("description") ? false : true)
  },
  
  whiteCards: function () {    
     if (!this._white_cards) {
       this._white_cards = new SketchMate.Collections.WhiteCards([], {
         sketch: this
       });
     }
     
     return this._white_cards;
   },
  
   parse: function (jsonResp) {
     if (jsonResp.white_cards) {
       this.white_cards().set(jsonResp.white_cards, { parse: true });
       delete jsonResp.white_cards;
     }
     
     return jsonResp;
   }
})