# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.credentials.secret_key_base.to_s

  def authenticate_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    decoded = decode_token(token)
    @current_user = User.find(decoded[:user_id]) if decoded
  rescue
    render json: { error: 'Unauthorized' }, status: :unauthorized
  end

  private

  def decode_token(token)
    JWT.decode(token, SECRET_KEY, true, algorithm: 'HS256')[0].symbolize_keys
  end
end

