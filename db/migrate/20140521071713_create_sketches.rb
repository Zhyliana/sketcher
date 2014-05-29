class CreateSketches < ActiveRecord::Migration
  def change
    create_table :sketches do |t|
      t.integer :user_id, null: false
      t.text :data_url 
      t.string   :image_file_name
      t.string   :image_content_type
      t.integer  :image_file_size
      t.datetime :image_updated_at

      t.timestamps
    end
    
    add_index :sketches, :user_id
  end
end
