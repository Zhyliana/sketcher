class Sketch < ActiveRecord::Base
  validates :user_id, presence: true
  
  belongs_to :user
  has_many :voters, through: :card_assignments, foreign_key: :user_id
  
  has_attached_file :image, :styles => {
    :show => "600x600>",
    :thumbnail => "150x150#>"
  }
  
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
