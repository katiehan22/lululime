json.extract! @product, :id, :name, :price, :category, :subcategory, :details, :description, :colours, :sizes 
json.imgUrls @product.photos.map { |file| file.url }