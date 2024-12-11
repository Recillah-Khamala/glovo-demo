# app/controllers/authentication_controller.rb
class AuthenticationController < ApplicationController
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def register
    user = User.new(user_params)
    if user.save
      render json: { message: 'User created successfully' }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      token = encode_token(user_id: user.id)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end

  private

  def encode_token(payload)
    JWT.encode(payload, SECRET_KEY)
  end

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end

