Rails.application.routes.draw do
  root "subjects#root"
  resources :subjects do
    resources :labs, only: [:new, :create, :edit, :destroy, :update]
  end
end
