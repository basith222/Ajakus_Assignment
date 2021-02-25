class UsersController < ApplicationController
  respond_to :html, :js, :json
  
  
  def new
    @user=User.new
  end
  
  def show
    @user = User.find(params[:id])
  end
  
  def create
    @user = User.new(user_params)
    @user_save_status = @user.save
    (@user_save_status == true) ? do_after_save_part(@user,params) : do_after_save_fail_part(@user)    
  end
  
  def  do_after_save_part(user,params)
    UserMailer.user_confirmation_mail(user).deliver_now 
    set_user_language params
    respond_to do |format|
      format.html{redirect_to user_path(user)}
      format.js {redirect_to user_path(user)}
    end
  end
  
  def do_after_save_fail_part(user)
   flash.now[:error] = user.errors.full_messages.uniq.join(', ') 
   @errors = user.errors.full_messages
   respond_to do |format|
      format.html{redirect_to new_user_path}
      format.js{new_user_path}
    end
  end  

  private
   
  def user_params
   params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :messeage)
  end 
  
  def set_user_language params
   params[:locale] = :es
   I18n.locale = (params[:language] == "Spanish") ?  params[:locale] : I18n.default_locale
  end
  
end
