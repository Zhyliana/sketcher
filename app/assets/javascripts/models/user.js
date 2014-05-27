SketchMate.Models.User = Backbone.Model.extend({
  url: function() {
      return "/users/" + this.id;
  },
  
  userWhiteCards: function () { 
     if (!this._whiteCards) {
       this._whiteCards = new SketchMate.Collections.WhiteCards([], {
         user: this
       });
     }

     return this._whiteCards;
   },
   
  userSketches: function(){
    if(!this._userSketches){
      this._userSketches = new SketchMate.Collections.Sketches([], {
        user: this
      });
    }
    
    return this._userSketches;
  },

    parse: function(jsonResp){
    if (jsonResp.sketches){
      this.userSketches().set(jsonResp.sketches, { parse: true });
      delete jsonResp.sketches;
    }
    
    if (jsonResp.white_cards){
      this.userWhiteCards().set(jsonResp.white_cards, { parse: true });
      delete jsonResp.white_cards;
    }
    
    return jsonResp
  },
})