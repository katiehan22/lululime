class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true, index: true
      t.references :product, null: false, foreign_key: true, index: true 
      t.integer :rating, null: false
      t.string :nickname, null: false 
      t.string :title, null: false 
      t.text :body, null: false 
      t.timestamps
    end
  end
end
