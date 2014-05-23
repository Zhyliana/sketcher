# == Schema Information
#
# Table name: card_sketch_assignments
#
#  id         :integer          not null, primary key
#  sketch_id  :integer
#  card_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class CardSketchAssignment < ActiveRecord::Base
end
