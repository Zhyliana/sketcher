class CreateUserVoteJoinTable < ActiveRecord::Migration
  def change
    create_join_table :users, :white_cards do |t|
      # t.index [:user_id, :white_card_id]
      # t.index [:white_card_id, :user_id]
    end
  end
end
