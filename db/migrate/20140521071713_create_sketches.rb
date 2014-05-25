class CreateSketches < ActiveRecord::Migration
  def change
    create_table :sketches do |t|
      t.integer :user_id, null: false
      t.integer :votes

      t.timestamps
    end
    
    add_index :sketches, :user_id
  end
end
