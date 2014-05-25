SketchMate.Models.User = Backbone.Model.extend({
  url: function() {
      return "/users/" + this.id;
  }
})