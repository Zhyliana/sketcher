class Users < ApplicationController
  def create
    Person.create(user_params)
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :remember_me)
  end
end