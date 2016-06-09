Rails.application.routes.draw do
  devise_for :users
  root "subjects#root"
  resources :subjects do
    resources :labs, only: [:create,:destroy, :update]
  end
end
