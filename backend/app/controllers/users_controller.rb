# app/controllers/users_controller.rb
class UsersController < ApplicationController
  before_action :authenticate_request, only: [:show, :update]

  # View Profile
  def show
    render json: @current_user, status: :ok
  end

  # Update Profile
  def update
    if @current_user.update(user_params)
      render json: { message: 'Profile updated successfully' }, status: :ok
    else
      render json: { errors: @current_user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:username, :email)  # Add any other profile fields here
  end
end
