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
  validates :body, uniqueness: true
  has_many :card_sketch_assignments
  has_many :sketches, through: :card_sketch_assignments, source: :sketch
  belongs_to :user
end
