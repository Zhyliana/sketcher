class UsersController < ApplicationController
<<<<<<< HEAD
  def new
=======
  def show
    @user = User.find(params[:id])
  end

  private  
  def user_params
    params.require(:user).permit(:email)
>>>>>>> safe-email
  end
end
