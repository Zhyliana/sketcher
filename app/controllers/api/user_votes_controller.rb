module Api
  class UserVotesController < ApplicationController  
    def create
      @user_vote =  UserVote.new(user_vote_params)
    
      if @user_vote.save

        render json: { sucess: "saved" }
      else 

        render json: { errors: "not saved" }
      end
    end
    


    private
    def user_vote_params
      params.require(:user_vote).permit(:user_id, :white_card_id, :vote_value)
    end
  end
end
