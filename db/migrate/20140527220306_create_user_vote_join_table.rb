class CreateUserVoteJoinTable < ActiveRecord::Migration
  def change
    create_table :user_votes do |t|
      t.integer :user_id, null: false
      t.integer :white_card_id, null: false
      t.integer :vote_value, null: false, default: 0
      
      t.index [:user_id, :white_card_id]
      t.index [:white_card_id, :user_id]
    end
  end
end
