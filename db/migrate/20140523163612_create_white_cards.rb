class CreateWhiteCards < ActiveRecord::Migration
  def change
    create_table :white_cards do |t|
      t.string :body, null: false
      t.integer :user_id

      t.timestamps
    end
    
    add_index :white_cards, :user_id
  end
end
