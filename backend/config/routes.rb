Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  # get "up" => "rails/health#show", as: :rails_health_check
  namespace :api do
    resources :transport_orders, only: [:create]
  end

  # New routes for authentication
  post '/register', to: 'authentication#register'
  post '/login', to: 'authentication#login'

  # Example protected route
  get '/dashboard', to: 'dashboard#index'

  # New routes for user profile management
  get '/profile', to: 'users#show'
  patch '/profile', to: 'users#update'

  # New routes for password reset functionality
  post '/password_reset', to: 'password_resets#create'
  patch '/password_reset', to: 'password_resets#update'

  # Defines the root path route ("/")
  # root "posts#index"
end
