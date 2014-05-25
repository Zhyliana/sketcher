class UsersController < ApplicationController
  def show
    @User = User.find(params[:id])

    render partial: "users/user", locals: { sketch: @sketch }
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
    params.require(:user).permit(:email)
  end
end
