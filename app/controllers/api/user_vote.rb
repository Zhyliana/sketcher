module Api
  class UserVotesController < ApplicationController  
    def create
      @user_vote =  UserVote.record_vote(current_user.id, white_card_id, value)
      
      @user_vote.user = current_user

      if @user_vote.save
        render json: { sucess: "saved" }
      else 
        render json: { errors: "not saved" }
      end
    end
    


    private
    def white_card_params
      params.require(:user_vote).permit(:user_id, :white_card_id, :vote_value)
    end
  end
end
