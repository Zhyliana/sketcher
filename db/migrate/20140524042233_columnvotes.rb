class Columnvotes < ActiveRecord::Migration
  def change
    remove_column :white_cards, :votes
    add_column :white_cards, :votes, :integer, { default: 0 } 
  end
end
