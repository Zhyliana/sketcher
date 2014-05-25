json.extract! user, :email, :username, :card_karma, :sketch_karma, :created_at, :updated_at
json.white_cards user.white_cards, partial: 'api/white_cards/white_card', as: :white_card
json.sketches user.sketches, partial: 'api/sketches/sketch', as: :sketch
