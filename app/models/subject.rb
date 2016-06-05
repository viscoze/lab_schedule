class Subject < ActiveRecord::Base
  has_many :labs, dependent: :destroy
end
