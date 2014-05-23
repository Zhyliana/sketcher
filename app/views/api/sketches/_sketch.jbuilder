json.extract! sketch, :id, :image, :user_id, :votes, :user, :created_at, :updated_at
json.white_cards sketch.white_cards, partial: 'api/white_cards/white_card', as: :white_card
