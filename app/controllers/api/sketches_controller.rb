module Api
  class SketchesController < ApiController
    wrap_parameters :sketch, include: [:image, :votes]
    def index
      @sketches = Sketch.playable

      render :index
    end

    def show
      @sketch = Sketch.find(params[:id])

      render partial: "api/sketches/sketch", locals: { sketch: @sketch }
    end

    def create
      @sketch = current_user.sketches.build(sketch_params)
      if @sketch.save
        render partial: "api/sketches/sketch", locals: { sketch: @sketch }
      else
        render json: { errors: @sketch.errors.full_messages }, status: 422
      end
    end
    
    def update
      @sketch = Sketch.find(params[:id])
      
    end


    private
    def sketch_params
      params.require(:sketch).permit(:user_id, :image, :user, :playable?, :white_cards)
    end
  end
end