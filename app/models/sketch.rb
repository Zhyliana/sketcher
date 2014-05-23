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
  validates :user_id, :votes, presence: true
  
  belongs_to :user
  has_many :card_sketch_assignments
  has_many :white_cards, through: :card_sketch_assignments, source: :white_card
  # has_many :voters, through: :card_assignments, foreign_key: :user_id
  
  has_attached_file :image, :styles => {
    :show => "600x600>",
    :thumbnail => "150x150#>"
  }
  
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/  
end
