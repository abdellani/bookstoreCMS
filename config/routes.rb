Rails.application.routes.draw do
  namespace :api do
      resources :books, only: [:index, :create, :update, :show, :destroy]
      resources :users, only: [:index, :create, :update, :show, :destroy]
      post '/login', to: 'sessions#create'
      get '/logged_in', to: 'sessions#is_logged_in?'
      delete '/logout', to: 'sessions#destroy'

      get '/generes', to: 'generes#index'
  end
  

  get '*path', to: 'homepage#index'
  root 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
