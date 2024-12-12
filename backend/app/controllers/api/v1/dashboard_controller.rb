# app/controllers/api/v1/dashboard_controller.rb
class Api::V1::DashboardController < ApplicationController
  before_action :authenticate_request

  def index
    render json: { message: "Welcome to your dashboard, #{current_user.username}!" }, status: :ok
  end
end
