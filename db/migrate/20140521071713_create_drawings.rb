class CreateDrawings < ActiveRecord::Migration
  def change
    create_table :drawings do |t|
      t.integer :user_id

      t.timestamps
    end
    
    add_index :drawings, :user_id
  end
end
