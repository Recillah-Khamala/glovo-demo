# app/controllers/dashboard_controller.rb
class DashboardController < ApplicationController
  before_action :authenticate_request

  def index
    render json: { message: "Welcome, #{@current_user.username}" }
  end
end
