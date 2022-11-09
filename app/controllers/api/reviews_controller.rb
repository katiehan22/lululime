class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index 
    @reviews = Review.where(product_id: params[:product_id])
    render :index 
  end

  def create 
    @review = Review.new(review_params)
    if @review.save 
      render :show 
    else
      render json: {errors: ["Please fill in all fields"]}, status: 422
    end
  end

  def update 
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show 
    else
      # render json: @review.errors.full_messages, status: 422
      render json: {errors: ["Please fill in all fields"]}, status: 422
    end
  end

  def destroy 
    @review = Review.find_by(id: params[:id])
    if @review.destroy 
      render :show 
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private 
  def review_params 
    params.require(:review).permit(:user_id, :product_id, :rating, :nickname, :title, :body)
  end
end
