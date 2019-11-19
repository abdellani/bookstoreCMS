Rails.application.routes.draw do
  namespace :api do
      resources :books, only: [:index, :create, :update, :show, :destroy]
  end
  

  get '*path', to: 'homepage#index'
  root 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
