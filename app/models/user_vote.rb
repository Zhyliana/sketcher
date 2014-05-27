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
  
  belongs_to :user_id
  belongs_to :white_card_id
end
