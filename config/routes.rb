# == Route Map (Updated 2014-05-23 09:40)
#
#                   Prefix Verb   URI Pattern                      Controller#Action
#         new_user_session GET    /users/sign_in(.:format)         devise/sessions#new
#             user_session POST   /users/sign_in(.:format)         devise/sessions#create
#     destroy_user_session DELETE /users/sign_out(.:format)        devise/sessions#destroy
#            user_password POST   /users/password(.:format)        devise/passwords#create
#        new_user_password GET    /users/password/new(.:format)    devise/passwords#new
#       edit_user_password GET    /users/password/edit(.:format)   devise/passwords#edit
#                          PATCH  /users/password(.:format)        devise/passwords#update
#                          PUT    /users/password(.:format)        devise/passwords#update
# cancel_user_registration GET    /users/cancel(.:format)          devise/registrations#cancel
#        user_registration POST   /users(.:format)                 devise/registrations#create
#    new_user_registration GET    /users/sign_up(.:format)         devise/registrations#new
#   edit_user_registration GET    /users/edit(.:format)            devise/registrations#edit
#                          PATCH  /users(.:format)                 devise/registrations#update
#                          PUT    /users(.:format)                 devise/registrations#update
#                          DELETE /users(.:format)                 devise/registrations#destroy
#                     root GET    /                                root#root
#                     user GET    /users/:id(.:format)             users#show
#             api_sketches GET    /api/sketches(.:format)          api/sketches#index {:format=>:json}
#                          POST   /api/sketches(.:format)          api/sketches#create {:format=>:json}
#           new_api_sketch GET    /api/sketches/new(.:format)      api/sketches#new {:format=>:json}
#          edit_api_sketch GET    /api/sketches/:id/edit(.:format) api/sketches#edit {:format=>:json}
#               api_sketch GET    /api/sketches/:id(.:format)      api/sketches#show {:format=>:json}
#                          PATCH  /api/sketches/:id(.:format)      api/sketches#update {:format=>:json}
#                          PUT    /api/sketches/:id(.:format)      api/sketches#update {:format=>:json}
#                          DELETE /api/sketches/:id(.:format)      api/sketches#destroy {:format=>:json}
#

Rails.application.routes.draw do
  devise_for :users
  
  root to: "root#root"
  
  resources :users, only: [:show, :index], defaults: { format: :json }
  namespace :api, defaults: { format: :json } do
    resources :sketches do 
       get "white_cards", to: "white_cards#index"
       get "playable_cards", to: "white_cards#playable"
    end
    resources :white_cards 
    get "top_cards", to: "white_cards#top"
  end

end

