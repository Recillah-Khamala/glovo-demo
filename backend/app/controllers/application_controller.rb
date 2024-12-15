# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActionController::ParameterMissing, with: :parameter_missing
  rescue_from JWT::DecodeError, with: :invalid_token

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

  def record_not_found
    render json: { error: 'Record not found' }, status: :not_found
  end

  def parameter_missing
    render json: { error: 'Required parameters are missing' }, status: :unprocessable_entity
  end

  def invalid_token
    render json: { error: 'Invalid token' }, status: :unauthorized
  end
end

