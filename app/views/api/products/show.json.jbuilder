json.extract! @product, :id, :name, :price, :category, :subcategory, :details, :description, :colours, :sizes 
json.img_urls @product.photos.map { |file| url_for(file) }