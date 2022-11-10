@products.each do |product|
  json.set! product.id do 
    json.extract! product, :id, :name, :price, :colours
    # json.imgUrls product.photos.map { |file| file.url }
  end
end