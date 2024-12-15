# app/controllers/api/v1/users_controller.rb
class Api::V1::UsersController < ApplicationController
  before_action :authenticate_request, except: [:index]  # Skip authentication for index action

  # View all users
  def index
    users = User.all
    render json: { users: users }, status: :ok
  end

  # View Profile
  def show
    render json: { user: @current_user }, status: :ok
  end

  # Update Profile
  def update
    if @current_user.update(user_params)
      render json: { message: 'Profile updated successfully', user: @current_user }, status: :ok
    else
      render json: { errors: @current_user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email) # Add other fields if needed
  end
end

