class UserMailer < ApplicationMailer
  
  def user_confirmation_mail(user)
    @user = user
    @to_mail_id = 'info@ajackus.com'
    mail(to: @to_mail_id , subject: 'Messege Confirmation')
  end
  
end
