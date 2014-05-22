class Sketch < ActiveRecord::Base
  validates :user_id, presence: true
  
  has_one :owner, through: :sumbissions, foreign_key: :user_id
  has_many :voters, through: :card_assignments, foreign_key: :user_id
end
