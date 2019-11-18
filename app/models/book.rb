class Book < ApplicationRecord

  validates :title, presence: true, length: {minimum:3, maximum:50}
  validates :description, presence: true, length: {minimum:3, maximum:200}
  validates :ISBN, presence: true, uniqueness: true
  # validates :link, presence: true
end