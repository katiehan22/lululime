class UpdateCartItems < ActiveRecord::Migration[7.0]
  def change
    add_column :cart_items, :primary_img_idx, :integer
  end
end
