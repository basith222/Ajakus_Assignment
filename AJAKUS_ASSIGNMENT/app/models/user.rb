class User < ActiveRecord::Base
 
 
 
  
  #validates mandatory fields
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :messeage, presence: true
  
 
  
  
  
  
  
  
  
end
