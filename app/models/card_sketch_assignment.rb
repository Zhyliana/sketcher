# == Schema Information
#
# Table name: card_sketch_assignments
#
#  id            :integer          not null, primary key
#  sketch_id     :integer
#  created_at    :datetime
#  updated_at    :datetime
#  white_card_id :integer
#

class CardSketchAssignment < ActiveRecord::Base
  belongs_to :white_card
  # belngs_to :sketch, foreign_key: :sketch_id, class_name: "Sketch"
end
