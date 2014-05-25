class UsersController < ApplicationController
<<<<<<< HEAD
<<<<<<< HEAD
  def new
=======
  def show
    @user = User.find(params[:id])
=======
  # def show
  #   @user = User.find(params[:id])
  # end
  
  def index
    @users = User.all
    fail 
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @users.to_json }
    end
>>>>>>> safe-email2
  end


  private  
  def user_params
    params.require(:user).permit(:email)
>>>>>>> safe-email
  end
end
