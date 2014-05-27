class UsersController < ApplicationController
<<<<<<< HEAD
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
=======
  def show
    @user = User.find(params[:id])

    render partial: "api/users/user", locals: { user: @user }
  end
  
  def index
    @users = User.all

    render "api/users/index", locals: { users: @users }
>>>>>>> fcce62a45134c218fcbf709cf270261744513159
  end


  private  
  def user_params
<<<<<<< HEAD
    params.require(:user).permit(:email)
>>>>>>> safe-email
=======
    params.require(:user).permit(:email, :sketches, :white_cards)
>>>>>>> fcce62a45134c218fcbf709cf270261744513159
  end
end
