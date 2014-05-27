class CreateUservotes < ActiveRecord::Migration
  def change
    create_table :uservotes do |t|

      t.timestamps
    end
  end
end
