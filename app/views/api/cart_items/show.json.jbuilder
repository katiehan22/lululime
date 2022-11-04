json.extract! @cart_item, :id, :user_id, :product_id, :quantity, :colour, :size
json.product_name @cart_item.product.name
json.product_price @cart_item.product.price

# {
#   id: ,
#   userId: ,
#   productId: ,
#   quantity: ,
#   colour: ,
#   size: ,
#   productName: ,
#   productSize:
# }