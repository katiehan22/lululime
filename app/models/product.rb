# == Schema Information
#
# Table name: products
#
#  id               :bigint           not null, primary key
#  name             :string           not null
#  price            :float            not null
#  category         :string           not null
#  subcategory      :string           not null
#  details          :string           default([]), is an Array
#  description      :string           not null
#  colours          :string           default([]), is an Array
#  sizes            :string           default([]), is an Array
#  featured_product :boolean          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Product < ApplicationRecord
  validates :name, :price, :category, :subcategory, :details, :description, :colours, :sizes, presence: true 
  validates :featured_product, inclusion: {in: [true, false]}

  # has_one_attached :photo
  has_many_attached :photos

  #has many reviews and has many carts
end
