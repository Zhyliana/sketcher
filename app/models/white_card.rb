# == Schema Information
#
# Table name: white_cards
#
#  id         :integer          not null, primary key
#  body       :string(255)      not null
#  user_id    :integer          not null
#  votes      :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class WhiteCard < ActiveRecord::Base
end
