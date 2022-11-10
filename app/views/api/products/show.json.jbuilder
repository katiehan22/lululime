# json.extract! @product, :id, :name, :price, :category, :subcategory, :details, :description, :colours, :sizes 
# json.imgUrls @product.photos.map { |file| file.url }

@products.each do |product|
  json.set! product.id do 
    json.extract! product, :id, :name, :price, :category, :subcategory, :details, :description, :colours, :sizes 
    json.imgUrls product.photos.map { |file| file.url }
  end
end