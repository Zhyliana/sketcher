class ChangeCardSketchAssignments < ActiveRecord::Migration
  def change
    remove_column :card_sketch_assignments, :card_id
    add_column :card_sketch_assignments, :white_card_id, :integer
  end  
end
