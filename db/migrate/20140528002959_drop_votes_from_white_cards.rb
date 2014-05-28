class DropVotesFromWhiteCards < ActiveRecord::Migration
  def change
    remove_column :white_cards, :votes
  end
end
