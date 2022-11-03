# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  quantity   :integer          not null
#  colour     :string           not null
#  size       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
  validates :user_id, :product_id, :quantity, :colour, :size, presence: true

  belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :User

  belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product
end
