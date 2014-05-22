Rails.application.routes.draw do
  root :to => "root#root"
  
  devise_for :users,
  
  namespace :api, defaults: { format: :json } do
    resources :drawings
  end
end
