class User < ApplicationRecord
  has_secure_password
  has_many :books
  ROLES = ['user', 'author']

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :role, presence: true, inclusion: {in: ROLES, message: 'Please select one of the values'}
  
end
