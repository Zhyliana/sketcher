class DropUserIdColumninCards < ActiveRecord::Migration
  def change
    remove_column :white_cards, :user_id
    add_column :white_cards, :user_id, :integer
  end
end
