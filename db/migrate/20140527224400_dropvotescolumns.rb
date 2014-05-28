class Dropvotescolumns < ActiveRecord::Migration
  def change
    remove_column :sketches, :votes
    remove_column :white_cards, :votes
  end
end
