class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    render partial: "users/user", locals: { user: @user }
  end
  
  def index
    @users = User.all
    fail 
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @users.to_json }
    end
  end


  private  
  def user_params
    params.require(:user).permit(:email, :sketches, :white_cards)
  end
end
