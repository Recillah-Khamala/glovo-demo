# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  attr_reader :current_user

  SECRET_KEY = Rails.application.credentials.secret_key_base.to_s

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers)
    render json: { error: 'Unauthorized' }, status: :unauthorized unless @current_user
  end

  private

  def decode_token(token)
    JWT.decode(token, SECRET_KEY, true, algorithm: 'HS256')[0].symbolize_keys
  end
end

