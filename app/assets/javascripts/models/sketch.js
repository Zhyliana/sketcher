SketchMate.Models.Sketch = Backbone.Model.extend({
  urlRoot: "/api/sketches",
  // is_image: function () {
  //   return (this.get("description") ? false : true)
  // },
  
  whiteCards: function () { 
    if (!this._whiteCards) {
     this._whiteCards = new SketchMate.Collections.WhiteCards([], {
       sketch: this
     });
    }

    return this._whiteCards;
  },
   
  playableCards: function(){
    var playableCards = new SketchMate.Collections.PlayableWhiteCards([], {
     sketch: this
    });

    return playableCards
  },

   parse: function (jsonResp) {  
     if (jsonResp.white_cards) {
       this.whiteCards().set(jsonResp.white_cards, { parse: true });
       delete jsonResp.white_cards;
     }
   
     return jsonResp;
   }
})