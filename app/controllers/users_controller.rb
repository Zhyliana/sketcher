class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    render partial: "api/users/user", locals: { user: @user }
  end
  
  def index
    @users = User.all

    render "api/users/index", locals: { users: @users }
  end


  private  
  def user_params
    params.require(:user).permit(:email, :sketches, :white_cards)
  end
end
