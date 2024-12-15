# app/models/user.rb
class User < ApplicationRecord
  has_secure_password

  # Validations
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, if: -> { new_record? || !password.nil? }

  # Additional attributes (if needed)
  # attr_accessor :first_name, :last_name
end

