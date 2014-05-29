module Api
  class UserVotesController < ApplicationController  
    def create
      @user_vote =  UserVote.new(user_vote_params)
    
      if @user_vote.save

        render json: { sucess: "saved" }
      else 

        render json: { errors: "not saved" }, status: 422
      end
    end
    
    def update
      @user_vote =  UserVote.find(params[:id])
      
      if @user_vote.update_attributes(user_vote_params)
        render json: { sucess: "updated" }
      else 
        render json: { errors: "not saved" }, status: 422
      end
    end
    
    def destroy
      @user_vote =  UserVote.find(params[:id])
      if @user_vote.destroy
        render json: { sucess: "destroyed" }
      else 
        render json: { errors: "not saved" }, status: 422
      end
    end


    private
    def user_vote_params
      params.require(:user_vote).permit(:user_id, :white_card_id, :vote_value)
    end
  end
end
