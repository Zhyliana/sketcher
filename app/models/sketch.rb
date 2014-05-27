# == Schema Information
#
# Table name: sketches
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  data_url           :text
#  votes              :integer
#  created_at         :datetime
#  updated_at         :datetime
#  image_file_name    :string(255)
#  image_content_type :string(255)
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Sketch < ActiveRecord::Base
  validates :user_id, presence: true
  
  belongs_to :user
  has_many :card_sketch_assignments
  has_many :white_cards, through: :card_sketch_assignments, source: :white_card

  has_attached_file :image, :styles => {
    :show => "600x600>",
    :thumbnail => "150x150#>"
  }
  
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/ 
  
  def self.playable
    Sketch.find_by_sql(([<<-SQL]))
      SELECT 
        sketches.*
      FROM
        sketches JOIN card_sketch_assignments ON card_sketch_assignments.sketch_id = sketches.id
      GROUP BY sketches.id
      HAVING COUNT(card_sketch_assignments.white_card_id) < 9
    SQL
  end
  
  def self.completed
    Sketch.find_by_sql(([<<-SQL]))
      SELECT 
        sketches.*
      FROM
        sketches JOIN card_sketch_assignments ON card_sketch_assignments.sketch_id = sketches.id
      GROUP BY sketches.id
      HAVING COUNT(card_sketch_assignments.white_card_id) = 8 
    SQL
  end
end
