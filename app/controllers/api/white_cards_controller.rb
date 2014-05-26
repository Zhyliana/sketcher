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
    
    def playable
      played_card_ids = []
      
      Sketch.find(params[:sketch_id]).white_cards.each do |card|
        played_card_ids << card.id
      end
      
      top_cards =  WhiteCard.order(votes: :desc).limit(100)
      available_cards =  top_cards.where.not(id: played_card_ids)
      @white_cards = available_cards.shuffle[0,5]

      render :index
    end

    def top
      @white_cards =  WhiteCard.order(votes: :desc).limit(100)
      render :index
    end

    
    def update
      @white_card = WhiteCard.find_by(id: params[:id])
      
      if @white_card.update_attributes(white_card_params)
        render partial: "api/white_cards/white_card", locals: { white_card: @white_card }
      else
        @white_cards = WhiteCard.all
        render partial: "api/white_cards/white_card", locals: { white_card: @white_card }
      end
    end
  
    def create
      @white_card =  WhiteCard.new(white_card_params)
      
      @white_card.user = current_user

      if @white_card.save
        render json: { sucess: "saved" }
      else 
        render json: { errors: "not saved" }
      end
    end

    private
    def white_card_params
      params.require(:white_card).permit(:body, :votes, :sketches)
    end
  end
end
