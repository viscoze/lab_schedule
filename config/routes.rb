Rails.application.routes.draw do
  root "subjects#index"
  resources :subjects do
    resources :labs, only: [:new, :create, :edit, :destroy, :update]
  end
end
