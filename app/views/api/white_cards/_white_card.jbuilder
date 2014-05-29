json.extract! white_card, :id, :body, :user_id, :total_votes, :current_user_vote

# , :user_votes


# unless current_user.nil?
#   json.user_votes do
#     current_user_vote = white_card.user_votes.select do |user_vote|
#       user_vote.user_id == current_user.id
#     end
# 
#     # unless current_user_vote.empty?
#     #   json.partial!("api/user_votes/user_vote", user_vote: current_user_vote.first)
#     # end
#   end
# end