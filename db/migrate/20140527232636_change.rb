class Change < ActiveRecord::Migration
  def change
    remove_column :white_cards, :vote_value
    add_column :white_cards, :votes, :integer, null: false, default: 0
  end
end
