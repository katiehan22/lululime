json.extract! @cart_item, :id, :user_id, :product_id, :quantity, :colour, :size
json.product_name @cart_item.product.name
json.product_price @cart_item.product.price
json.product_colours @cart_item.product.colours
json.product_sizes @cart_item.product.sizes

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