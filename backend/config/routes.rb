Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  # get "up" => "rails/health#show", as: :rails_health_check
  namespace :api do
    namespace :v1 do
      # Authentication routes
      post 'auth/login', to: 'authentication#login'
      post 'auth/register', to: 'authentication#register'

      # User profile routes
      resource :profile, only: [:show, :update], controller: 'users'

      # Password reset routes
      resource :password_reset, only: [:create, :update], controller: 'password_resets'

      # Dashboard routes
      get 'dashboard', to: 'dashboard#index'
    end
  end

  # New routes for authentication
  post '/register', to: 'authentication#register'
  post '/login', to: 'authentication#login'

  # Defines the root path route ("/")
  # root "posts#index"
end
