SketchMate.Models.Sketch = Backbone.Model.extend({
  urlRoot: "/api/sketches",
  is_image: function () {
      return (this.get("description") ? false : true)
    }
})