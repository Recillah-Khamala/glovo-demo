# app/controllers/api/v1/password_resets_controller.rb
class Api::V1::PasswordResetsController < ApplicationController
  # Send Reset Token
  def create
    user = User.find_by(email: params[:email])
    if user
      token = SecureRandom.hex(10)
      user.update(reset_token: token, reset_sent_at: Time.current)
      PasswordMailer.with(user: user, token: token).password_reset.deliver_later
      render json: { message: 'Password reset email sent' }, status: :ok
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  # Reset Password
  def update
    user = User.find_by(reset_token: params[:reset_token])
    if user && user.reset_sent_at > 2.hours.ago && user.update(password: params[:password], reset_token: nil)
      render json: { message: 'Password reset successfully' }, status: :ok
    else
      render json: { error: 'Invalid or expired token' }, status: :unprocessable_entity
    end
  end
end
