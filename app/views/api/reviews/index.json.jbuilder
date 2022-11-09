@reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :id, :user_id, :product_id, :rating, :nickname, :title, :body, :created_at
    json.product_name review.product.name
  end
end