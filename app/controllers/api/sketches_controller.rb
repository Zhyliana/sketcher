class SketchesController < ApplicationController
  def create
    @sketch = Sketch.new(params[:post])
    @sketch.user_id = current_user.id

    if @sketch.save
      render :json => @sketch
    else
      render :json =>  @sketch.errors.full_messages, :status => 422
    end
  end

end
