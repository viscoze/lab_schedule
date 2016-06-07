class Subject < ActiveRecord::Base
  has_many :labs, dependent: :destroy
  belongs_to :user
end
