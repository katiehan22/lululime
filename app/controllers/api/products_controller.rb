class Api::ProductsController < ApplicationController
  def index
    case params[:category]
      when "womens"
        case params[:subcategory]
          when "undefined"
            @products ||= Product.where(category: "womens")
          when "leggings"
            @products ||= Product.where(category: "womens", subcategory: "leggings")
          when "hoodies"
            @products ||= Product.where(category: "womens", subcategory: "hoodies")
          when "joggers"
            @products ||= Product.where(category: "womens", subcategory: "joggers")
          when "shirts"
            @products ||= Product.where(category: "womens", subcategory: "shirts")
        end
      when "mens"
        case params[:subcategory]
          when "undefined"
            @products ||= Product.where(category: "mens")
          when "joggers"
            @products ||= Product.where(category: "mens", subcategory: "joggers")
          when "hoodies"
            @products ||= Product.where(category: "mens", subcategory: "hoodies")
          when "shorts"
            @products ||= Product.where(category: "mens", subcategory: "shorts")
          when "shirts"
            @products ||= Product.where(category: "mens", subcategory: "shirts")
        end
      when "accessories"
        case params[:subcategory]
          when "undefined"
            @products ||= Product.where(category: "accessories")
          when "belt-bags"
            @products ||= Product.where(category: "accessories", subcategory: "belt-bags")
          when "backpacks"
            @products ||= Product.where(category: "accessories", subcategory: "backpacks")
        end
    end
  
    render :index
  end

  def show 
    # @product = Product.find_by(id: params[:id])
    # render :show 
    product_id = params[:id].to_i
    @products = [];
    @products.push(Product.find_by(id: product_id))

    (0..3).each do |i|
      new_id = ((product_id + i) % 46) + 1
      @products.push(Product.find_by(id: new_id))
    end

    render :show
  end
end
