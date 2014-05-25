module Api
  class CardSketchAssignmentsController < ApplicationController
    def create
      @assignment =  CardSketchAssignment.new(assign_params)
      # fail
      if @assignment.save
        render json: { sucess: "saved" }
      else 
        render json: { errors: "not saved" }
      end
    end
    
    private
    def assign_params
      params.require(:card_sketch_assignment).permit(:user_id, :sketch_id, :white_card_id)
    end

  end
end
