# == Schema Information
#
# Table name: user_votes
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  white_card_id :integer          not null
#  vote_value    :integer          default(0), not null
#

class UserVote < ActiveRecord::Base
  validates :user_id, :white_card_id, :vote_value, presence: true
  validates :vote_value, inclusion: { in: [-1, 0, 1] }
  
  belongs_to :user
  belongs_to :white_card
  
  validates :user_id, uniqueness: { scope: :white_card_id }
  
  def self.record_vote(current_user_id, white_card_id, value)
    user_vote = self.new(user_id: current_user_id, white_card_id: white_card_id, vote_value: value)
      
    if user_vote.save!
      card = WhiteCard.find(white_card_id)
      card.votes += values
      card.save!
    end
  end

end
