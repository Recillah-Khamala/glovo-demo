# app/controllers/password_resets_controller.rb
class PasswordResetsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user
      # Generate reset token (use a library like `secure_random`)
      token = SecureRandom.hex(10)
      user.update(reset_token: token)
      # Send email with reset link (send via ActionMailer)
      PasswordMailer.with(user: user, token: token).password_reset.deliver_later
      render json: { message: 'Password reset email sent' }, status: :ok
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  def update
    user = User.find_by(reset_token: params[:reset_token])
    if user && user.update(password: params[:password], reset_token: nil)
      render json: { message: 'Password reset successfully' }, status: :ok
    else
      render json: { error: 'Invalid or expired token' }, status: :unprocessable_entity
    end
  end
end

