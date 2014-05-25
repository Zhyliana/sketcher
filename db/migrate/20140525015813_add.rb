class Add < ActiveRecord::Migration
  def change
    add_column :card_sketch_assignments, :user_id, :integer
  end
end
