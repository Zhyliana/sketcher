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
  # has_many :voters, through: :card_assignments, foreign_key: :user_id
  
  # named_scope :playable, conditions: { white_cards: true }
  
  has_attached_file :image, :styles => {
    :show => "600x600>",
    :thumbnail => "150x150#>"
  }
  
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/ 
  
  def playable?
    self.white_cards.length < 9
  end
  
  
  def self.playable
    Sketch.find_by_sql(([<<-SQL, self.id]))
      SELECT 
        sketches.*
      FROM
        sketches JOIN card_sketch_assignments ON sketches.id = card_sketch_assignments.sketch_id
      GROUP BY sketches.id
      HAVING COUNT(card_sketch_assignments.white_card_id) < 9
    SQL
  end

  
  
  Response.find_by_sql([<<-SQL, self.respondent_id, self.answer_choice_id])
    SELECT
      responses.*
    FROM
      responses
    JOIN
      answer_choices
    ON
      answer_choices.id = responses.answer_choice_id
    WHERE
      responses.respondent_id = ? AND
      answer_choices.question_id IN (
        SELECT
          question_id
        FROM
          answer_choices
        WHERE
          id = ?
        )
    SQL

  end


end
