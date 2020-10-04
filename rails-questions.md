# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

$ rails new my_app -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - This is the http verb we are sending to the server via URL.

library - This is the URL for the route the user is requesting.

:id - This is a parameter. When a user types in a value in the URL after the last /, that value gets assigned to the key :id. This parameter can now be used in the method show, which is defined in the book controller.

book - This is the name of the controller, which houses the show method.

show - This is the method within the book controller that will be invoked when the URL is routed to /library/:id.


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

If you forget to add a foreign key to a model, you'll need to create a migration. You have to add a new column for the foreign id on the belongs_to side. 

a. You need to be inside your rails app on your terminal (not rails console) and generate a migration with $ rails g migration add_foreign_key_to_belongs_model. The name of the migration should be semantic, descriptive, begin with a verb, and end with the model you're changing.
b. Navigate to your db/migrate folder and find the latest migration file you just made. You're going to define the change you'd like to make with add_column :belongs_models, :owner_model_id, :integer. This will create the association between belongs_to model and its owner's id, of datatype integer. You then save the file and run $ rails db:migrate to save this migration to the schema. Thus, you have now added the foreign key to your model.



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$ rails g model Person shirt:string pants:string shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

a. Navigate to your app < models folder and select the .rb file you'd like to create validations for. You will be coding in the same space as where you would put relations if you had any.
b. You need to create a validation for presence within the class by typing 
    validates :shirt, :pants, :shoes, presence: true
You are using the keyword validate to ensure all keys for model Person are present before the object can be instantiated.



6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

A Rails model class is singular and PascalCased upon generation. The model file name is singular and snake_case. The database table that is generated is plural and snake_case.