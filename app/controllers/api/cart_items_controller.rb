class Api::CartItemsController < ApplicationController
  before_action :require_logged_in

  def index 
    user_id = current_user.id 
    @cart_items = CartItem.where(user_id: user_id)
    render :index 
  end

  def show 
    @cart_item = CartItem.find_by(id: params[:id])
    render :show
  end

  def create 
    @cart_item = CartItem.new(cart_params)
    if @cart_item.save 
      render :show 
    else 
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def update 
    @cart_item = CartItem.find_by(id: params[:id])
    if @cart_item.update(cart_params)
      render :show 
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy 
    @cart_item = CartItem.find_by(id: params[:id])
    if @cart_item.destroy 
      render :show 
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  private 
  def cart_params 
    params.require(:cart_item).permit(:id, :user_id, :product_id, :quantity, :colour, :size)
  end
end
