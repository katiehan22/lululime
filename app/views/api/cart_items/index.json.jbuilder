@cart_items.each do |cart_item|
  json.set! cart_item.id do 
    json.extract! cart_item, :id, :user_id, :product_id, :quantity, :colour, :size, :primary_img_idx
    json.product_name cart_item.product.name
    json.product_price cart_item.product.price
    json.product_colours cart_item.product.colours
    json.product_sizes cart_item.product.sizes
    # json.product_img_urls cart_item.product.photos.map { |file| file.url }
  end
end