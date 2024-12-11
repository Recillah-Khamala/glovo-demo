# app/mailers/password_mailer.rb
class PasswordMailer < ApplicationMailer
  def password_reset
    @user = params[:user]
    @token = params[:token]
    mail(to: @user.email, subject: 'Password Reset Instructions')
  end
end
