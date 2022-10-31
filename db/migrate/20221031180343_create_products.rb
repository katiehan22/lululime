class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.float :price, null: false 
      t.string :category, null: false
      t.string :subcategory, null: false
      t.string :details, array: true, default: []
      t.string :description, null: false 
      t.string :colours, array: true, default: []
      t.string :sizes, array: true, default: []
      t.boolean :featured_product, null: false 
      t.timestamps
    end
    add_index :products, :name 
  end
end
