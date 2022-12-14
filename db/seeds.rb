require 'open-uri';

  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Review.destroy_all
  CartItem.destroy_all
  Product.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('products')
  ApplicationRecord.connection.reset_pk_sequence!('cart_items')
  ApplicationRecord.connection.reset_pk_sequence!('reviews')

  puts "Creating users..."
  # Create one user with an easy to remember email, and password:
  demoUser = User.create!(
    email: 'demo@user.io', 
    password: 'password'
  )

  reviewUser = User.create!(
    email: 'reviews@mail.com',
    password: 'password'
  )

  # More users
  # 10.times do 
  #   User.create!({
  #     email: Faker::Internet.unique.email,
  #     password: 'password'
  #   }) 
  # end

  puts "Creating products..."

  # Womens leggings
  product1 = Product.create! ({
    name: "lululime Align High-Rise Pant 25\"",
    price: 98.00,
    category: "womens",
    subcategory: "leggings",
    details: ["Designed for Yoga", "Feels Buttery-Soft and Weightless, Nulu Fabric", "High Rise, 25\" Length"],
    description: "Weightless flexibility and focus, for deepening your practice.",
    colours: ["Black", "Icing Blue", "True Navy", "White"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: true
  })
  product1.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/01_align/01_black_v1.png"), filename: "01_1.png"}, 
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/01_align/01_black_v2.png"), filename: "01_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/01_align/02_icing_v1.png"), filename: "01_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/01_align/02_icing_v2.png"), filename: "01_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/01_align/03_navy_v1.png"), filename: "01_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/01_align/03_navy_v2.png"), filename: "01_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/01_align/04_white_v1.png"), filename: "01_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/01_align/04_white_v2.png"), filename: "01_8.png"}
  ])

  product2 = Product.create! ({
    name: "Wunder Train High-Rise Crop 23\"",
    price: 88.00,
    category: "womens",
    subcategory: "leggings",
    details: ["Designed for Training", "Everlux, Our Fastest Drying Fabric Is Soft and Cool to the Touch", "High Rise, 23\" Length, Lightweight"],
    description: "Train hard, not hot. Powered by Everlux???, the Wunder Train collection is highly breathable and quickly wicks sweat so you feel less sweaty during (and after) your workout.",
    colours: ["True Navy", "Water Drop", "Dark Olive", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product2.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/02_wunder/01_navy_v1.png"), filename: "02_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/02_wunder/01_navy_v2.png"), filename: "02_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/02_wunder/02_water_v1.png"), filename: "02_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/02_wunder/02_water_v2.png"), filename: "02_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/02_wunder/03_olive_v1.png"), filename: "02_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/02_wunder/03_olive_v2.png"), filename: "02_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/02_wunder/04_black_v1.png"), filename: "02_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/02_wunder/04_black_v2.png"), filename: "02_8.png"}
  ])

  product3 = Product.create! ({
    name: "InStill High-Rise Tight 25\"",
    price: 128.00,
    category: "womens",
    subcategory: "leggings",
    details: ["Designed for Yoga", "Smoothly Supportive, SmoothCover Fabric", "High Rise, 25\" Length"],
    description: "An uplifting support system, for steadying every pose.",
    colours: ["Green Foliage", "True Navy", "Dark Olive", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product3.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/03_instill/01_green_v1.png"), filename: "03_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/03_instill/01_green_v2.png"), filename: "03_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/03_instill/02_navy_v1.png"), filename: "03_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/03_instill/02_navy_v2.png"), filename: "03_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/03_instill/03_olive_v1.png"), filename: "03_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/03_instill/03_olive_v2.png"), filename: "03_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/03_instill/04_black_v1.png"), filename: "03_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/03_instill/04_black_v2.png"), filename: "03_8.png"}
  ])

  product4 = Product.create! ({
    name: "Fast and Free High-Rise Tight 25\"",
    price: 128.00,
    category: "womens",
    subcategory: "leggings",
    details: ["Designed for Running", "Weightless Coverage, Nulux Fabric", "High Rise, 25\" Length"],
    description: "100% pure running freedom. The Fast and Free collection, powered by Nulux??? fabric, is about unrestricted movement and incredibly lightweight coverage that passes the squat test.",
    colours: ["Dark Red", "True Navy", "Dark Olive", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product4.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/04_fast/01_red_v1.png"), filename: "04_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/04_fast/01_red_v2.png"), filename: "04_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/04_fast/02_navy_v1.png"), filename: "04_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/04_fast/02_navy_v2.png"), filename: "04_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/04_fast/03_olive_v1.png"), filename: "04_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/04_fast/03_olive_v2.png"), filename: "04_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/04_fast/04_black_v1.png"), filename: "04_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/04_fast/04_black_v2.png"), filename: "04_8.png"}
  ])

  product5 = Product.create! ({
    name: "Groove Super-High-Rise Flared Pant Nulu",
    price: 118.00,
    category: "womens",
    subcategory: "leggings",
    details: ["Designed for Yoga and On the Move", "Feels Buttery-Soft and Weightless, Nulu??? Fabric", "Super-High Rise, 32.5\" Length"],
    description: "A coveted classic. These flared pants are perfect for your practice and beyond.",
    colours: ["True Navy", "Water Drop", "Dark Olive", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product5.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/05_groove/01_navy_v1.png"), filename: "05_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/05_groove/01_navy_v2.png"), filename: "05_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/05_groove/02_water_v1.png"), filename: "05_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/05_groove/02_water_v2.png"), filename: "05_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/05_groove/03_olive_v1.png"), filename: "05_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/05_groove/03_olive_v2.png"), filename: "05_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/05_groove/04_black_v1.png"), filename: "05_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/leggings/05_groove/04_black_v2.png"), filename: "05_8.png"}
  ])

  # Womens hoodies & sweatshirts
  product6 = Product.create! ({
    name: "Scuba Oversized Half-Zip Hoodie",
    price: 118.00,
    category: "womens",
    subcategory: "hoodies",
    details: ["Designed for On the Move", "Naturally Breathable, Cotton-Blend Fleece Fabric", "Oversized Fit, Waist Length"],
    description: "With an oversized fit and the soft, cozy fabric you love, this new half-zip Scuba silhouette keeps your post-practice comfort at peak levels.",
    colours: ["Electric Turquoise", "Wasabi", "Pomegranate", "Black"],
    sizes: ["XS/S", "M/L", "XL/XXL"], 
    featured_product: true
  })
  product6.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/01_scuba/01_electric_v1.png"), filename: "06_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/01_scuba/01_electric_v2.png"), filename: "06_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/01_scuba/02_wasabi_v1.png"), filename: "06_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/01_scuba/02_wasabi_v2.png"), filename: "06_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/01_scuba/03_pom_v1.png"), filename: "06_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/01_scuba/03_pom_v2.png"), filename: "06_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/01_scuba/04_black_v1.png"), filename: "06_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/01_scuba/04_black_v2.png"), filename: "06_8.png"}
  ])

  product7 = Product.create! ({
    name: "Scuba Oversized Fleece Funnel Neck",
    price: 168.00,
    category: "womens",
    subcategory: "hoodies",
    details: ["Designed for On the Move", "Plush, Textured Fleece Fabric", "Oversized Fit, Bum-Covering Length"],
    description: "With extra length, a cozy funnel neck, and the textured fleece fabric you know and love, this oversized Scuba half zip maximizes post-practice comfort.",
    colours: ["White Opal", "Faint Lavender", "Smoked Spruce", "Black"],
    sizes: ["XS/S", "M/L", "XL/XXL"], 
    featured_product: false
  })
  product7.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/02_fleece/01_white_v1.png"), filename: "07_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/02_fleece/01_white_v2.png"), filename: "07_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/02_fleece/02_lav_v1.png"), filename: "07_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/02_fleece/02_lav_v2.png"), filename: "07_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/02_fleece/03_spruce_v1.png"), filename: "07_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/02_fleece/03_spruce_v2.png"), filename: "07_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/02_fleece/04_black_v1.png"), filename: "07_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/02_fleece/04_black_v2.png"), filename: "07_8.png"}
  ])

  product8 = Product.create! ({
    name: "Loungeful Hoodie",
    price: 108.00,
    category: "womens",
    subcategory: "hoodies",
    details: ["Designed for On the Move", "Warm, Cotton-Blend Fleece Fabric", "Relaxed Fit, Hip Length"],
    description: "Where ready meets relaxed. The Loungeful collection is made of soft, premium fleece fabrics and laid-back silhouettes that redefine your comfort zone.",
    colours: ["Heathered Core Ultra Light Grey", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product8.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/03_loungeful/01_gray_v1.png"), filename: "08_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/03_loungeful/01_gray_v2.png"), filename: "08_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/03_loungeful/02_black_v1.png"), filename: "08_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/03_loungeful/02_black_v2.png"), filename: "08_4.png"}
  ])

  product9 = Product.create! ({
    name: "Perfectly Oversized Cropped Crew Softstreme",
    price: 118.00,
    category: "womens",
    subcategory: "hoodies",
    details: ["Designed for On the Move", "Peach-Fuzz Soft, Softstreme??? Fabric", "Relaxed Fit, Waist Length"],
    description: "Nothing but love for this perfectly oversized cropped sweatshirt. Toss it on after your workout for that time-to-relax fit.",
    colours: ["Faint Lavender", "White Opal", "Water Drop", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product9.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/04_soft/01_lav_v1.png"), filename: "09_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/04_soft/01_lav_v2.png"), filename: "09_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/04_soft/02_white_v1.png"), filename: "09_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/04_soft/02_white_v2.png"), filename: "09_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/04_soft/03_water_v1.png"), filename: "09_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/04_soft/03_water_v2.png"), filename: "09_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/04_soft/04_black_v1.png"), filename: "09_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/04_soft/04_black_v2.png"), filename: "09_8.png"}
  ])

  product10 = Product.create! ({
    name: "Define Jacket Luon",
    price: 118.00,
    category: "womens",
    subcategory: "hoodies",
    details: ["Designed for On the Move", "Cottony-Soft Feel, Luon Fabric", "Slim Fit, Hip Length"],
    description: "An always-ready layer that transforms into what you need.",
    colours: ["Green Foliage", "True Navy", "White", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product10.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/05_define/01_green_v1.png"), filename: "10_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/05_define/01_green_v2.png"), filename: "10_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/05_define/02_navy_v1.png"), filename: "10_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/05_define/02_navy_v2.png"), filename: "10_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/05_define/03_white_v1.png"), filename: "10_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/05_define/03_white_v2.png"), filename: "10_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/05_define/04_black_v1.png"), filename: "10_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/02_hoodies/05_define/04_black_v2.png"), filename: "10_8.png"}
  ])

  # Womens joggers
  product11 = Product.create! ({
    name: "Relaxed High-Rise Jogger",
    price: 118.00,
    category: "womens",
    subcategory: "joggers",
    details: ["Designed for On the Move", "Soft, Cotton French Terry Fabric", "High Rise, Full Length"],
    description: "Cloud nine cozy is here. These relaxed-fit joggers feel soft on your skin while an elasticated waist and hems lock warmth in.",
    colours: ["Carob Brown", "Heathered Core Ultra Light Grey", "Black", "White"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: true
  })
  product11.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/01_relaxed/01_carob_v1.png"), filename: "11_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/01_relaxed/01_carob_v2.png"), filename: "11_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/01_relaxed/02_gray_v1.png"), filename: "11_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/01_relaxed/02_gray_v2.png"), filename: "11_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/01_relaxed/03_black_v1.png"), filename: "11_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/01_relaxed/03_black_v2.png"), filename: "11_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/01_relaxed/04_white_v1.png"), filename: "11_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/01_relaxed/04_white_v2.png"), filename: "11_8.png"}
  ])

  product12 = Product.create! ({
    name: "Scuba High-Rise Jogger 7/8 Length",
    price: 118.00,
    category: "womens",
    subcategory: "joggers",
    details: ["Designed for On the Move", "Cotton-Blend Fleece Feels Fuzzy and Warm", "High Rise, Full Length, Midweight"],
    description: "When you're craving casual comfort, cozy up in these soft joggers that pair perfectly with our Scuba Hoodie.",
    colours: ["Carob Brown", "Heathered Core Ultra Light Grey", "Black", "True Navy"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product12.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/02_scuba/01_carob_v1.png"), filename: "12_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/02_scuba/01_carob_v2.png"), filename: "12_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/02_scuba/02_gray_v1.png"), filename: "12_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/02_scuba/02_gray_v2.png"), filename: "12_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/02_scuba/03_black_v1.png"), filename: "12_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/02_scuba/03_black_v2.png"), filename: "12_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/02_scuba/04_navy_v1.png"), filename: "12_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/02_scuba/04_navy_v2.png"), filename: "12_8.png"}
  ])

  product13 = Product.create! ({
    name: "Loungeful High-Rise Jogger",
    price: 118,
    category: "womens",
    subcategory: "joggers",
    details: ["Designed for On the Move", "Warm, Cotton-Blend Fleece Fabric", "High Rise, Full Length"],
    description: "Where ready meets relaxed. The Loungeful collection is made of soft, premium fleece fabrics and laid-back silhouettes that redefine your comfort zone.",
    colours: ["White Opal", "Heathered Core Ultra Light Grey", "White", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product13.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/03_loungeful/01_white_v1.png"), filename: "13_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/03_loungeful/01_white_v2.png"), filename: "13_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/03_loungeful/02_gray_v1.png"), filename: "13_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/03_loungeful/02_gray_v2.png"), filename: "13_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/03_loungeful/03_white_v1.png"), filename: "13_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/03_loungeful/03_white_v2.png"), filename: "13_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/03_loungeful/04_black_v1.png"), filename: "13_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/03_loungeful/04_black_v2.png"), filename: "13_8.png"}
  ])

  product14 = Product.create! ({
    name: "Dance Studio Mid-Rise Jogger",
    price: 98.00,
    category: "womens",
    subcategory: "joggers",
    details: ["Designed for On the Move", "Lightweight, Swift Fabric", "Mid Rise, Full Length"],
    description: "Easy, comfortable, and never clingy, these joggers are in our after-practice hall of fame.",
    colours: ["True Navy", "Water Drop", "Carob Brown", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product14.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/04_dance/01_navy_v1.png"), filename: "14_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/04_dance/01_navy_v2.png"), filename: "14_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/04_dance/02_water_v1.png"), filename: "14_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/04_dance/02_water_v2.png"), filename: "14_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/04_dance/03_carob_v1.png"), filename: "14_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/04_dance/03_carob_v2.png"), filename: "14_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/04_dance/04_black_v1.png"), filename: "14_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/04_dance/04_black_v2.png"), filename: "14_8.png"}
  ])

  product15 = Product.create! ({
    name: "Ready to Rulu High-Rise Jogger",
    price: 108.00,
    category: "womens",
    subcategory: "joggers",
    details: ["Designed for On the Move", "Lightweight Warmth, Rulu Fabric", "High Rise, Full Length"],
    description: "These soft, sweat-wicking joggers have you covered for warming up, cooling down, and chilling out.",
    colours: ["Water Drop", "Dark Olive", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product15.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/05_rulu/01_water_v1.png"), filename: "15_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/05_rulu/01_water_v2.png"), filename: "15_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/05_rulu/02_olive_v1.png"), filename: "15_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/05_rulu/02_olive_v2.png"), filename: "15_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/05_rulu/03_black_v1.png"), filename: "15_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/03_joggers/05_rulu/03_black_v2.png"), filename: "15_6.png"}
  ])

  # Womens shirts
  product16 = Product.create! ({
    name: "lululime Align??? Tank Top",
    price: 68.00,
    category: "womens",
    subcategory: "shirts",
    details: ["Designed for Yoga", "Feels Buttery-Soft and Weightless, Nulu Fabric", "Light Support"],
    description: "When feeling nothing is everything. The lululime Align collection, powered by Nulu fabric, is so weightless and buttery soft, all you feel is your practice.",
    colours: ["Poolside", "Green Foliage", "White", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: true
  })
  product16.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/01_align/01_poolside_v1.png"), filename: "16_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/01_align/01_poolside_v2.png"), filename: "16_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/01_align/02_green_v1.png"), filename: "16_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/01_align/02_green_v2.png"), filename: "16_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/01_align/03_white_v1.png"), filename: "16_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/01_align/03_white_v2.png"), filename: "16_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/01_align/04_black_v1.png"), filename: "16_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/01_align/04_black_v2.png"), filename: "16_8.png"}
  ])

  product17 = Product.create! ({
    name: "Hold Tight Tank Top",
    price: 58.00,
    category: "womens",
    subcategory: "shirts",
    details: ["Designed for On the Move", "Soft, Ribbed Modal Fabric", "Tight Fit, Hip Length"],
    description: "This lightweight everyday top has just the right softness, just the right stretch, and a snug fit that feels like a second skin.",
    colours: ["Roasted Brown", "True Navy", "White", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product17.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/02_hold/01_brown_v1.png"), filename: "17_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/02_hold/01_brown_v2.png"), filename: "17_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/02_hold/02_navy_v1.png"), filename: "17_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/02_hold/02_navy_v2.png"), filename: "17_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/02_hold/03_white_v1.png"), filename: "17_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/02_hold/03_white_v2.png"), filename: "17_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/02_hold/04_black_v1.png"), filename: "17_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/02_hold/04_black_v2.png"), filename: "17_8.png"}
  ])

  product18 = Product.create! ({
    name: "All Yours Cotton T-Shirt",
    price: 58.00,
    category: "womens",
    subcategory: "shirts",
    details: ["Designed for On the Move", "Super-Soft, Pima Cotton Fabric", "Relaxed Fit, Hip Length"],
    description: "The All Yours collection is made from soft, comfortable fabrics and easy-to-wear silhouettes that feel amazing and go with just about everything.",
    colours: ["Roasted Brown", "Black", "White", "Heathered Core Ultra Light Grey"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product18.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/03_cotton/01_brown_v1.png"), filename: "18_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/03_cotton/01_brown_v2.png"), filename: "18_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/03_cotton/02_black_v1.png"), filename: "18_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/03_cotton/02_black_v2.png"), filename: "18_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/03_cotton/03_white_v1.png"), filename: "18_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/03_cotton/03_white_v2.png"), filename: "18_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/03_cotton/04_gray_v1.png"), filename: "18_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/03_cotton/04_gray_v2.png"), filename: "18_8.png"}
  ])

  product19 = Product.create! ({
    name: "Swiftly Tech Long Sleeve Shirt 2.0 Race Length",
    price: 78.00,
    category: "womens",
    subcategory: "shirts",
    details: ["Designed for Running and Training", "Skip-the-Chafe, Seamless Construction", "Slim Fit, Race Length"],
    description: "Go ahead, get sweaty. The Swiftly Tech collection, powered by seamless construction, is the ultimate gear for running and training.",
    colours: ["Water Drop", "Faint Lavender", "White", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product19.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/04_swiftly/01_water_v1.png"), filename: "19_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/04_swiftly/01_water_v2.png"), filename: "19_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/04_swiftly/02_lav_v1.png"), filename: "19_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/04_swiftly/02_lav_v2.png"), filename: "19_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/04_swiftly/03_white_v1.png"), filename: "19_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/04_swiftly/03_white_v2.png"), filename: "19_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/04_swiftly/04_black_v1.png"), filename: "19_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/04_swiftly/04_black_v2.png"), filename: "19_8.png"}
  ])

  product20 = Product.create! ({
    name: "Back in Action Long Sleeve Shirt",
    price: 68.00,
    category: "womens",
    subcategory: "shirts",
    details: ["Designed for On the Move", "Super-Soft, Pima Cotton Fabric", "Relaxed Fit"],
    description: "A classic long sleeve you'll reach for again and again. The scooped back hem adds length for when you want a bit more coverage.",
    colours: ["True Navy", "Faint Lavender", "White", "Black"],
    sizes: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], 
    featured_product: false
  })
  product20.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/05_action/01_navy_v1.png"), filename: "20_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/05_action/01_navy_v2.png"), filename: "20_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/05_action/02_lav_v1.png"), filename: "20_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/05_action/02_lav_v2.png"), filename: "20_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/05_action/03_white_v1.png"), filename: "20_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/05_action/03_white_v2.png"), filename: "20_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/05_action/04_black_v1.png"), filename: "20_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/womens/04_shirts/05_action/04_black_v2.png"), filename: "20_8.png"}
  ])

  # Mens joggers
  product21 = Product.create! ({
    name: "ABC Jogger Warpstreme",
    price: 128.00,
    category: "mens",
    subcategory: "joggers",
    details: ["Designed for On the Move", "Everyday Performance, Warpstreme Fabric", "Classic-Tapered Fit"],
    description: "Powered by ABC technology, these joggers feel like moving from a cramped studio apartment to a house with a yard.",
    colours: ["True Navy", "Dark Olive", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"], 
    featured_product: true
  })
  product21.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/01_warpstreme/01_navy_v1.png"), filename: "21_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/01_warpstreme/01_navy_v2.png"), filename: "21_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/01_warpstreme/02_olive_v1.png"), filename: "21_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/01_warpstreme/02_olive_v2.png"), filename: "21_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/01_warpstreme/03_black_v1.png"), filename: "21_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/01_warpstreme/03_black_v2.png"), filename: "21_6.png"}
  ])

  product22 = Product.create! ({
    name: "License to Train Jogger",
    price: 128.00,
    category: "mens",
    subcategory: "joggers",
    details: ["Designed for Training", "Abrasion-Resistant, Swift Fabric", "Classic-Tapered Fit"],
    description: "Train hard, adventure harder. The abrasion-resistant fabric on these versatile joggers can handle burpees and backpacking.",
    colours: ["Graphite Grey", "White Opal", "Black", "True Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"], 
    featured_product: false
  })
  product22.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/02_license/01_gray_v1.png"), filename: "22_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/02_license/01_gray_v2.png"), filename: "22_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/02_license/02_white_v1.png"), filename: "22_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/02_license/02_white_v2.png"), filename: "22_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/02_license/03_black_v1.png"), filename: "22_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/02_license/03_black_v2.png"), filename: "22_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/02_license/04_navy_v1.png"), filename: "22_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/02_license/04_navy_v2.png"), filename: "22_8.png"}
  ])

  product23 = Product.create! ({
    name: "At Ease Jogger",
    price: 128.00,
    category: "mens",
    subcategory: "joggers",
    details: ["Designed for On the Move", "Four-Way Stretch, Cotton-Blend Fabric", "Slim-Tapered Fit"],
    description: "Whether you're warming up or heading out after training, these textured joggers feel soft against your skin and are naturally breathable.",
    colours: ["Smoked Spruce", "Red Merlot", "Dark Olive", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"], 
    featured_product: false
  })
  product23.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/03_ease/01_spruce_v1.png"), filename: "23_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/03_ease/01_spruce_v2.png"), filename: "23_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/03_ease/02_red_v1.png"), filename: "23_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/03_ease/02_red_v2.png"), filename: "23_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/03_ease/03_olive_v1.png"), filename: "23_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/03_ease/03_olive_v2.png"), filename: "23_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/03_ease/04_black_v1.png"), filename: "23_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/03_ease/04_black_v2.png"), filename: "23_8.png"}
  ])

  product24 = Product.create! ({
    name: "City Sweat Jogger",
    price: 118.00,
    category: "mens",
    subcategory: "joggers",
    details: ["Designed for On the Move", "Soft, Stretch French Terry Fabric", "Classic-Tapered Fit"],
    description: "Sometimes, basics are best. These naturally breathable joggers have your back (and your legs, too) from workout to hang out.",
    colours: ["Black", "True Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"], 
    featured_product: false
  })
  product24.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/04_city/01_black_v1.png"), filename: "24_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/04_city/01_black_v2.png"), filename: "24_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/04_city/02_navy_v1.png"), filename: "24_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/04_city/02_navy_v2.png"), filename: "24_4.png"}
  ])

  product25 = Product.create! ({
    name: "Surge Jogger",
    price: 118.00,
    category: "mens",
    subcategory: "joggers",
    details: ["Designed for Running", "Quick-Drying Fabric", "Classic-Tapered Fit"],
    description: "These lightweight running joggers have zips at the cuff for quick on and off when you're warming up.",
    colours: ["True Navy", "Dark Olive", "Black", "Red Merlot"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"], 
    featured_product: false
  })
  product25.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/05_surge/01_navy_v1.png"), filename: "25_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/05_surge/01_navy_v2.png"), filename: "25_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/05_surge/02_olive_v1.png"), filename: "25_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/05_surge/02_olive_v2.png"), filename: "25_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/05_surge/03_black_v1.png"), filename: "25_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/05_surge/03_black_v2.png"), filename: "25_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/05_surge/04_red_v1.png"), filename: "25_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/01_joggers/05_surge/04_red_v2.png"), filename: "25_8.png"}
  ])

  # Mens hoodies
  product26 = Product.create! ({
    name: "Oversized-Fit Fleece Half Zip",
    price: 148.00,
    category: "mens",
    subcategory: "hoodies",
    details: ["Designed for On the Move", "Soft, Stretch Fleece Fabric", "Oversized Fit"],
    description: "Fleecy does it. Layer this oversized-fitting sweater for an instant dose of comfort any day of the week.",
    colours: ["True Navy", "Pomegranate", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: true
  })
  product26.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/01_fleece/01_navy_v1.png"), filename: "26_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/01_fleece/01_navy_v2.png"), filename: "26_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/01_fleece/02_pom_v1.png"), filename: "26_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/01_fleece/02_pom_v2.png"), filename: "26_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/01_fleece/03_black_v1.png"), filename: "26_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/01_fleece/03_black_v2.png"), filename: "26_6.png"}
  ])

  product27 = Product.create! ({
    name: "City Sweat Crew",
    price: 118.00,
    category: "mens",
    subcategory: "hoodies",
    details: ["Designed for On the Move", "Soft, Stretch French Terry Fabric", "Classic Fit"],
    description: "Everyone needs a good crew. Soft, naturally breathable fabric makes this one just that much better.",
    colours: ["White Opal", "True Navy", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: false
  })
  product27.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/02_city/01_white_v1.png"), filename: "27_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/02_city/01_white_v2.png"), filename: "27_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/02_city/02_navy_v1.png"), filename: "27_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/02_city/02_navy_v2.png"), filename: "27_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/02_city/03_black_v1.png"), filename: "27_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/02_city/03_black_v2.png"), filename: "27_6.png"}
  ])

  product28 = Product.create! ({
    name: "Engineered Warmth Long Sleeve Crew",
    price: 148.00,
    category: "mens",
    subcategory: "hoodies",
    details: ["Designed for On the Move", "Seamless, 3D-Engineered Knit", "Classic Fit"],
    description: "Designed to perform on outdoor adventures, this merino wool-blend long sleeve is a technical layer for your cold-weather wardrobe.",
    colours: ["Pomegranate", "Natural Ivory", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: false
  })
  product28.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/03_engineered/01_pom_v1.png"), filename: "28_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/03_engineered/01_pom_v2.png"), filename: "28_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/03_engineered/02_ivory_v1.png"), filename: "28_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/03_engineered/02_ivory_v2.png"), filename: "28_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/03_engineered/03_black_v1.png"), filename: "28_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/03_engineered/03_black_v2.png"), filename: "28_6.png"}
  ])

  product29 = Product.create! ({
    name: "Drysense Training Hoodie",
    price: 108.00,
    category: "mens",
    subcategory: "hoodies",
    details: ["Designed for Training", "Sweat-Wicking Fabric", "Classic Fit"],
    description: "Go ahead, sweat. This hoodie, powered by our anti-stink technology, won't cling and feels good against sweaty skin.",
    colours: ["True Navy", "Black", "Natural Ivory"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: false
  })
  product29.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/04_drysense/01_navy_v1.png"), filename: "29_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/04_drysense/01_navy_v2.png"), filename: "29_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/04_drysense/02_black_v1.png"), filename: "29_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/04_drysense/02_black_v2.png"), filename: "29_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/04_drysense/03_ivory_v1.png"), filename: "29_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/04_drysense/03_ivory_v2.png"), filename: "29_6.png"}
  ])

  product30 = Product.create! ({
    name: "Shift Stitch Hoodie",
    price: 118.00,
    category: "mens",
    subcategory: "hoodies",
    details: ["Designed for On the Move", "Sweat-Wicking, Waffle-Knit Fabric", "Classic Fit"],
    description: "Take the cozy route. Soft, waffle-knit fabric wicks away sweat and dries quickly to keep you comfortable after workouts.",
    colours: ["Natural Ivory", "Carob Brown", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: false
  })
  product30.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/05_shift/01_ivory_v1.png"), filename: "30_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/05_shift/01_ivory_v2.png"), filename: "30_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/05_shift/02_carob_v1.png"), filename: "30_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/05_shift/02_carob_v2.png"), filename: "30_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/05_shift/03_black_v1.png"), filename: "30_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/02_hoodies/05_shift/03_black_v2.png"), filename: "30_6.png"}
  ])

  # Mens shorts
  product31 = Product.create! ({
    name: "License to Train Lined Short 7\"",
    price: 88.00,
    category: "mens",
    subcategory: "shorts",
    details: ["Designed for Training", "Abrasion-Resistant Fabric", "Classic Tapered Fit, 7\" Length"],
    description: "Train hard, adventure harder. Abrasion-resistant fabric adds protection against barbells and branches.",
    colours: ["Smoked Spruce", "Brier Rose", "White", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: true
  })
  product31.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/01_license/01_spruce_v1.png"), filename: "31_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/01_license/01_spruce_v2.png"), filename: "31_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/01_license/02_rose_v1.png"), filename: "31_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/01_license/02_rose_v2.png"), filename: "31_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/01_license/03_white_v1.png"), filename: "31_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/01_license/03_white_v2.png"), filename: "31_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/01_license/04_black_v1.png"), filename: "31_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/01_license/04_black_v2.png"), filename: "31_8.png"}
  ])

  product32 = Product.create! ({
    name: "Commission Classic-Fit Short 9\" Warpstreme",
    price: 88.00,
    category: "mens",
    subcategory: "shorts",
    details: ["Designed for On the Move", "Everyday Performance, Warpstreme Fabric", "Classic Fit, 9\" Length"],
    description: "Our chino-inspired shorts rise to the top and deliver all-day and all-night comfort with ABC technology and technical fabrics.",
    colours: ["Black", "True Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: false
  })
  product32.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/02_commission/01_black_v1.png"), filename: "32_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/02_commission/01_black_v2.png"), filename: "32_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/02_commission/02_navy_v1.png"), filename: "32_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/02_commission/02_navy_v2.png"), filename: "32_4.png"}
  ])

  product33 = Product.create! ({
    name: "T.H.E. Linerless Short 7\"",
    price: 68.00,
    category: "mens",
    subcategory: "shorts",
    details: ["Designed for Training", "Lightweight, Swift Fabric", "Classic Tapered Fit, 7\" Length"],
    description: "Train. Hard. Every. Day. These lightweight, fan-favourite workout shorts have a split hem to keep you agile.",
    colours: ["Carob Brown", "Black", "True Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: false
  })
  product33.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/03_linerless/01_carob_v1.png"), filename: "33_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/03_linerless/01_carob_v2.png"), filename: "33_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/03_linerless/02_black_v1.png"), filename: "33_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/03_linerless/02_black_v2.png"), filename: "33_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/03_linerless/03_navy_v1.png"), filename: "33_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/03_linerless/03_navy_v2.png"), filename: "33_6.png"}
  ])

  product34 = Product.create! ({
    name: "Surge Half Tight 10\"",
    price: 98.00,
    category: "mens",
    subcategory: "shorts",
    details: ["Designed for Running", "Weightless Coverage, Nulux Fabric", "Tight Fit, 10\" Length"],
    description: "Feel the breeze. Wear these ventilated run shorts, powered by our Nulux fabric, on their own or layer under another pair of shorts.",
    colours: ["Black", "Carob Brown"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: false
  })
  product34.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/04_surge/01_black_v1.png"), filename: "34_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/04_surge/01_black_v2.png"), filename: "34_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/04_surge/02_carob_v1.png"), filename: "34_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/04_surge/02_carob_v2.png"), filename: "34_4.png"}
  ])

  product35 = Product.create! ({
    name: "Bowline Short 5\" Stretch Ripstop",
    price: 78.00,
    category: "mens",
    subcategory: "shorts",
    details: ["Designed for On the Move", "Water-Repellent, Stretch Ripstop Fabric", "Classic Fit, 5\" Length"],
    description: "These shorts play well with a sweatshirt or button-up, putting you in a long-weekend state of mind any day of the week.",
    colours: ["Smoked Spruce", "Brier Rose", "True Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: false
  })
  product35.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/05_bowline/01_spruce_v1.png"), filename: "35_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/05_bowline/01_spruce_v2.png"), filename: "35_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/05_bowline/02_rose_v1.png"), filename: "35_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/05_bowline/02_rose_v2.png"), filename: "35_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/05_bowline/03_navy_v1.png"), filename: "35_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/03_shorts/05_bowline/03_navy_v2.png"), filename: "35_6.png"}
  ])

  # Mens shirts
  product36 = Product.create! ({
    name: "Metal Vent Tech Short Sleeve Shirt 2.0",
    price: 78.00,
    category: "mens",
    subcategory: "shirts",
    details: ["Designed for Running and Training", "Skip-the-Chafe, Seamless Construction", "Slim Fit"],
    description: "An adapts-to-it-all shirt that seamlessly refreshes every workout.",
    colours: ["Carob Brown", "White Opal", "Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: true
  })
  product36.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/01_metal/01_carob_v1.png"), filename: "36_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/01_metal/01_carob_v2.png"), filename: "36_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/01_metal/02_white_v1.png"), filename: "36_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/01_metal/02_white_v2.png"), filename: "36_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/01_metal/03_black_v1.png"), filename: "36_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/01_metal/03_black_v2.png"), filename: "36_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/01_metal/04_white_v1.png"), filename: "36_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/01_metal/04_white_v2.png"), filename: "36_8.png"}
  ])

  product37 = Product.create! ({
    name: "The Fundamental T-Shirt Graphic",
    price: 58.00,
    category: "mens",
    subcategory: "shirts",
    details: ["Designed for On the Move", "Cottony-Soft, Abrasion-Resistant Fabric", "Updated, Classic Fit"],
    description: "When tech and comfort collide. This wardrobe staple blends cottony soft fabric with our abrasion-resistant technology for a classic tee that???ll last.",
    colours: ["Red Merlot", "Smoked Spruce", "Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: false
  })
  product37.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/02_fundamental/01_merlot_v1.png"), filename: "37_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/02_fundamental/01_merlot_v2.png"), filename: "37_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/02_fundamental/02_spruce_v1.png"), filename: "37_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/02_fundamental/02_spruce_v2.png"), filename: "37_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/02_fundamental/03_black_v1.png"), filename: "37_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/02_fundamental/03_black_v2.png"), filename: "37_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/02_fundamental/04_white_v1.png"), filename: "37_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/02_fundamental/04_white_v2.png"), filename: "37_8.png"}
  ])

  product38 = Product.create! ({
    name: "Drysense Training Short Sleeve Shirt",
    price: 68.00,
    category: "mens",
    subcategory: "shirts",
    details: ["Designed for Training", "Sweat-Wicking Fabric", "Classic Fit"],
    description: "Go ahead, sweat. This training top, powered by our anti-stink technology, won't cling and feels good against sweaty skin.",
    colours: ["Brier Rose", "True Navy", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"], 
    featured_product: false
  })
  product38.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/03_drysense/01_rose_v1.png"), filename: "38_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/03_drysense/01_rose_v2.png"), filename: "38_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/03_drysense/02_navy_v1.png"), filename: "38_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/03_drysense/02_navy_v2.png"), filename: "38_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/03_drysense/03_black_v1.png"), filename: "38_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/03_drysense/03_black_v2.png"), filename: "38_6.png"}
  ])

  product39 = Product.create! ({
    name: "Evolution Short Sleeve Polo Shirt",
    price: 88.00,
    category: "mens",
    subcategory: "shirts",
    details: ["Designed for On the Move", "Sweat-Wicking Fabric", "Slim Fit"],
    description: "Basically a hole-in-one. This polo, powered by our anti-stink technology, keeps you cool and comfortable on the course or wherever your day takes you.",
    colours: ["Carob Brown", "Smoked Spruce", "White Opal", "Black"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], 
    featured_product: false
  })
  product39.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/04_polo/01_carob_v1.png"), filename: "39_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/04_polo/01_carob_v2.png"), filename: "39_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/04_polo/02_spruce_v1.png"), filename: "39_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/04_polo/02_spruce_v2.png"), filename: "39_4.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/04_polo/03_white_v1.png"), filename: "39_5.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/04_polo/03_white_v2.png"), filename: "39_6.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/04_polo/04_black_v1.png"), filename: "39_7.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/04_polo/04_black_v2.png"), filename: "39_8.png"}
  ])

  product40 = Product.create! ({
    name: "Airing Easy Long Sleeve Shirt",
    price: 88.00,
    category: "mens",
    subcategory: "shirts",
    details: ["Designed for On the Move", "Quick-Drying, WovenAir Fabric", "Classic Fit"],
    description: "Your everyday button-up, but technical. Breathable, quick-drying fabric stands up to hot, go-go-go days.",
    colours: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"], 
    featured_product: false
  })
  product40.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/05_airing/01_black_v1.png"), filename: "40_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/05_airing/01_black_v2.png"), filename: "40_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/05_airing/02_white_v1.png"), filename: "40_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/mens/04_shirts/05_airing/02_white_v2.png"), filename: "40_4.png"}
  ])

  # Accessories - belt bags
  product41 = Product.create! ({
    name: "Everywhere Belt Bag",
    price: 38.00,
    category: "accessories",
    subcategory: "belt-bags",
    details: ["Designed for On the Move", "Water-Repellent Fabric", "Measurements"],
    description: "Phone, keys, wallet. Keep them close in this versatile belt bag that helps you get out the door and on to your next adventure.",
    colours: ["Black"],
    sizes: ["ONE SIZE"], 
    featured_product: true
  })
  product41.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/01_everywherebelt/01_black_v1.png"), filename: "41_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/01_everywherebelt/01_black_v2.png"), filename: "41_2.png"}
  ])

  product42 = Product.create! ({
    name: "Fast and Free Running Belt",
    price: 38.00,
    category: "accessories",
    subcategory: "belt-bags",
    details: ["Designed for Running", "Lightweight, Nulux Fabric", "Measurements"],
    description: "This sleek run belt is lightweight, breathable, and fits all your essentials so you can go the distance.",
    colours: ["Black"],
    sizes: ["XS/S", "S/M", "L/XL"], 
    featured_product: false
  })
  product42.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/02_fastbelt/01_black_v1.png"), filename: "42_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/02_fastbelt/01_black_v2.png"), filename: "42_2.png"}
  ])

  product43 = Product.create! ({
    name: "Wunderlust Belt Bag",
    price: 58.00,
    category: "accessories",
    subcategory: "belt-bags",
    details: ["Designed for On the Move", "Water-Repellent Fabric", "Measurements"],
    description: "Hold your essentials close. Compact and contoured to hug your body for a seamless fit, this bag is designed to be worn around the waist or over the shoulder.",
    colours: ["Black"],
    sizes: ["ONE SIZE"], 
    featured_product: false
  })
  product43.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/03_wunderlustbelt/01_black_v1.png"), filename: "43_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/03_wunderlustbelt/01_black_v2.png"), filename: "43_2.png"}
  ])

  product44 = Product.create! ({
    name: "Everyday Backpack 2.0 23L",
    price: 98.00,
    category: "accessories",
    subcategory: "backpacks",
    details: ["Designed for On the Move", "Water-Repellent Fabric", "Dimensions and Volume"],
    description: "Made for full days ahead. This backpack holds the goods???and has plenty of pockets and compartments to keep you organized along the way.",
    colours: ["True Navy", "Black"],
    sizes: ["ONE SIZE"], 
    featured_product: false
  })
  product44.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/04_everydayback/01_navy_v1.png"), filename: "44_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/04_everydayback/01_navy_v2.png"), filename: "44_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/04_everydayback/02_black_v1.png"), filename: "44_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/04_everydayback/02_black_v2.png"), filename: "44_4.png"}
  ])

  product45 = Product.create! ({
    name: "New Crew Backpack 22L",
    price: 98.00,
    category: "accessories",
    subcategory: "backpacks",
    details: ["Designed for On the Move", "Water-Repellent Fabric", "Dimensions and Volume"],
    description: "We made this backpack with dedicated compartments for your laptop, workout gear, and water bottle for an organized state of mind",
    colours: ["Burnt Caramel"],
    sizes: ["ONE SIZE"], 
    featured_product: false
  })
  product45.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/05_newcrew/01_caramel_v1.png"), filename: "45_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/05_newcrew/01_caramel_v2.png"), filename: "45_2.png"}
  ])

  product46 = Product.create! ({
    name: "City Adventurer Backpack 20L",
    price: 128.00,
    category: "accessories",
    subcategory: "backpacks",
    details: ["Designed for On the Move", "Water-Repellent Fabric", "Dimensions and Volume"],
    description: "City adventurers, we see you. This version of the backpack you know and love has an exterior water bottle pocket for quick access to hydration as you jet from work-to-workout.",
    colours: ["Burnt Caramel", "Black"],
    sizes: ["ONE SIZE"], 
    featured_product: false
  })
  product46.photos.attach([
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/06_cityback/01_caramel_v1.png"), filename: "46_1.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/06_cityback/01_caramel_v2.png"), filename: "46_2.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/06_cityback/02_black_v1.png"), filename: "46_3.png"},
    {io: URI.open("https://lululime.s3.us-west-2.amazonaws.com/accessories/06_cityback/02_black_v2.png"), filename: "46_4.png"}
  ])

  puts "Creating cart items..."

  cartItem1 = CartItem.create! ({
    user_id: demoUser.id,
    product_id: product1.id,
    quantity: 1, 
    colour: "Black",
    size: "4",
    primary_img_idx: 0
  })

  cartItem2 = CartItem.create! ({
    user_id: demoUser.id,
    product_id: product21.id,
    quantity: 1, 
    colour: "True Navy",
    size: "M",
    primary_img_idx: 0
  })

  puts "Creating reviews..."

  review1 = Review.create! ({
    user_id: demoUser.id,
    product_id: product1.id,
    rating: 5,
    nickname: "demo-lish",
    title: "Great pants",
    body: "These are so comfortable! Great for lounging."
  })

  review2 = Review.create! ({
    user_id: User.second.id,
    product_id: product1.id,
    rating: 3,
    nickname: "Kt",
    title: "So soft!",
    body: "Great color and so comfy. My favorite pants for yoga. Always gets so many compliments!"
  })

  review3 = Review.create! ({
    user_id: demoUser.id,
    product_id: product2.id,
    rating: 4,
    nickname: "Amber123",
    title: "Awesome!!",
    body: "Perfect pants for working out. Fabric keeps me cool and wicks away sweat."
  })

  puts "Done!"
