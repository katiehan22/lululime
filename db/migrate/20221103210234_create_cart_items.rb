class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.references :user, null: false, foreign_key: true, index: true
      t.references :product, null: false, foreign_key: true, index: true 
      t.integer :quantity, null: false 
      t.string :colour, null: false 
      t.string :size, null: false 
      t.timestamps
    end
  end
end
