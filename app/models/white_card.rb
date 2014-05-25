# == Schema Information
#
# Table name: white_cards
#
#  id         :integer          not null, primary key
#  body       :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#  user_id    :integer
#  votes      :integer          default(0)
#

class WhiteCard < ActiveRecord::Base
  validates :user, :body, :votes, presence: true
  has_many :card_sketch_assignments
  has_many :sketches, through: :card_sketch_assignments, source: :sketch
  belongs_to :user
end
