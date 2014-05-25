class CreateCardSketchAssignments < ActiveRecord::Migration
  def change
    create_table :card_sketch_assignments do |t|
      t.integer :sketch_id
      t.integer :white_card_id
      t.integer :user_id

      t.timestamps
    end
    
    add_index :card_sketch_assignments, :sketch_id
    add_index :card_sketch_assignments, :white_card_id
    add_index :card_sketch_assignments, :user_id
  end
end
