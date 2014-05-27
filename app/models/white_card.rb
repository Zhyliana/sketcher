# == Schema Information
#
# Table name: white_cards
#
#  id         :integer          not null, primary key
#  body       :string(255)      not null
#  user_id    :integer          not null
#  votes      :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class WhiteCard < ActiveRecord::Base
  validates :user, :body, :votes, presence: true
  validates :body, uniqueness: { case_sensitive: false }, length: { 
    in: 3..140,
    too_short: "You gotta write more than that. At least 3 charachters.",
    too_long: "It's a card, not a paragraph. Keep it under under 140"
   }
   
  has_many :card_sketch_assignments
  has_many :sketches, through: :card_sketch_assignments, source: :sketch
  belongs_to :user
end
