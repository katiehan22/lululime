# Lululime

Check out the live site here! [https://lululime.onrender.com/](https://lululime.onrender.com/)

## Background
Lululime is a full-stack React/Redux website clone of Lululemon, the athletic apparel retailer. 

## Features
### User Authentication - Login/Signup
* Lululime has secure user authentication, allowing users to create an account, or login with a demo user, so you can start shopping right away! 
![Screenshot](frontend/src/assets/screenshots/userauth.png)

### Product Listings
* View product listings with image changing on hover.
* Click through to each product to view its details and reviews. 
* Select desired color and size, with the image changing with each click.
* Add products to the bag.
![Screenshot](frontend/src/assets/screenshots/pdp.png)

### Bag
* Can hover on the bag icon to display a preview of items in the bag, or click on the bag to view more details. 
* Price and quantity are updated as items are added or removed from the bag.
* Can edit the color and size of items in the bag. 
![Screenshot](frontend/src/assets/screenshots/bagpreview.png)
![Screenshot](frontend/src/assets/screenshots/bag.png)

### Reviews
* Create, edit, and delete product reviews. 
* Error handling when submitting the review form.
![Screenshot](frontend/src/assets/screenshots/reviews.png)

### Search
* Render product listings that contain the query.
![Screenshot](frontend/src/assets/screenshots/search.png)

## Technologies
* React/Redux
* JavaScript/jQuery/JBuilder
* HTML, CSS
* Ruby on Rails
* PostgreSQL
* AWS S3

## Code Snippets
### useState Hook
```javascript
const [ratingSelection, setRatingSelection] = useState(review.rating);
const [nickname, setNickname] = useState(review.nickname);
const [title, setTitle] = useState(review.title);
const [body, setBody] = useState(review.body);
```
Above is a snippet from the Edit Review form. The useState hook is used to pre-fill the form with the values of the existing review so the user can easily edit the content. 

### jBuilder Views
```ruby
@cart_items.each do |cart_item|
  json.set! cart_item.id do 
    json.extract! cart_item, :id, :user_id, :product_id, :quantity, :colour, :size, :primary_img_idx
    json.product_name cart_item.product.name
    json.product_price cart_item.product.price
    json.product_colours cart_item.product.colours
    json.product_sizes cart_item.product.sizes
    json.product_img_urls cart_item.product.photos.map { |file| file.url }
  end
end
```
jBuilder was used to format the JSON responses from the backend to store in the frontend state. It allowed for less requests to the backend through active record associations.