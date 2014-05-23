class Sketch < ActiveRecord::Base
  validates :user_id, presence: true
  
  belongs_to :user
  has_many :voters, through: :card_assignments, foreign_key: :user_id
end
