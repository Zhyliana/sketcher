Rails.application.routes.draw do
  devise_for :users
  
  root to: "root#root"
  
  namespace :api, defaults: { format: :json } do
    resources :drawings
  end
end
