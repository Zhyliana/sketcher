# == Schema Information
#
# Table name: card_sketch_assignments
#
#  id            :integer          not null, primary key
#  sketch_id     :integer
#  created_at    :datetime
#  updated_at    :datetime
#  white_card_id :integer
#  user_id       :integer
#

class CardSketchAssignment < ActiveRecord::Base
  belongs_to :white_card
  belongs_to :sketch
end
