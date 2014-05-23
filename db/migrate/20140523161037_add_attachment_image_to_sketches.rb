class AddAttachmentImageToSketches < ActiveRecord::Migration
  def self.up
    change_table :sketches do |t|
      t.attachment :image
    end
  end

  def self.down
    drop_attached_file :sketches, :image
  end
end
