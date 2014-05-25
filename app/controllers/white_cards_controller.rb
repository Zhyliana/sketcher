class WhiteCardsController < ApplicationController
  def create
    debugger
    @white_card =  WhiteCard.new(white_card_params)
    @white_card.user_id = current_user.id
    @white_card.save
  end
  
 
  private
  def white_card_params
    params.require(:white_card).permit(:body, :votes, :user_id, :sketches)
  end
end