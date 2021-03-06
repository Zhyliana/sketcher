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
    
    def show
      @white_card = WhiteCard.find(params[:id])
      
      
      if @white_card
        render partial: "api/white_cards/white_card", locals: { white_card: @white_card }
      else
        @white_cards = WhiteCard.all
        render partial: "api/white_cards/white_card", locals: { white_card: @white_card }
      end
    end
    
    def playable
      played_card_ids = []
      
      Sketch.find(params[:sketch_id]).white_cards.each do |card|
        played_card_ids << card.id
      end
      
      available_cards = WhiteCard.all.sort_by{|card| card.total_votes && !played_card_ids.include?(card) }[1...100].reverse!

      @white_cards = available_cards.shuffle[0,5]

      render :index
    end

    def top
      @white_cards = WhiteCard.all.sort_by{|card| card.total_votes }[1...100].reverse!
      render :index
    end

    
    def update
      @white_card = WhiteCard.find_by(id: params[:id])
      
      @current_user_vote = @white_card.user_votes.where(user_id: current_user.id)
      
      if @white_card.update_attributes(white_card_params)
        render partial: "api/white_cards/white_card", locals: { white_card: @white_card, current_user_id: @current_user_vote }
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
      params.require(:white_card).permit(:body, :total_votes)
    end
  end
end
