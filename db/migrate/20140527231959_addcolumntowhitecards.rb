class Addcolumntowhitecards < ActiveRecord::Migration
  def change
    add_column :white_cards, :vote_value, :integer, null: false, default: 0
  end
end
