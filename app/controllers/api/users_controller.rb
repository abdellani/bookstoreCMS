class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      render json: {
        status: 201
      }
    else
      render json: {
        status: 401,
        errors: @user.errors.messages
      }
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :password_confirmation, :name, :email, :role)
  end
end