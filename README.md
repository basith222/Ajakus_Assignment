# Ajakus_Assignment
========This file include how to start up the rails application =========

Ruby version 2.2.2
Rails version Rails 4.2.0



step 1 : Mount to application directory

 Eg : cd Ajakus
 
step 2: Initialize rvm
 command: rvm use 2.2.2
 
step 3 : start the rails server

 command: rails server (or) rails s
 
++++++++++++++++++++++++++++++++++++++++++++++++++++

Now you will get an pg error if you dont have postgres database to overcome this error create db and add tp database.yml file in the application.

if you successfully created db the you will get another migration error.

To fix migration error run the command down below.

Command: rake db:migrate

Then start the server using the command 'rails s'

use the domain localhost:3001 for accessing the application.

ready to use the application :)
