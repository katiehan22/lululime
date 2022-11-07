# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  rating     :integer          not null
#  nickname   :string           not null
#  title      :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
  validates :user_id, :product_id, :rating, :nickname, :title, :body, presence: true

  belongs_to :user, 
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :product, 
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product
end
