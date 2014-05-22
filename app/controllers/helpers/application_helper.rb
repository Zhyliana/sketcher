module ApplicationHelper
  # filters
 before_filter :authenticate_user!

 # controller helpers
 user_signed_in?
 current_user

 # url helpers
 new_user_registration_path
 new_user_session_path
 destroy_user_session_path
end
