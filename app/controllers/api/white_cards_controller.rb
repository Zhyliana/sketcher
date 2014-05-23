module Api
  class WhiteCardsController < ApplicationController
    def index      
      if params[:sketch_id]
        @white_cards = Sketch.find(params[:sketch_id]).white_cards
      else
        @white_cards = WhiteCard.all
        render :index
      end
    end
    def card_params
      params.require(:white_card).permit(:body, :votes, :sketches)
    end
  end
end
