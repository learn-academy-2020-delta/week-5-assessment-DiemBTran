# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer:
    MVC is a style of programming that stands for Model, View, and Controller. This is a way to separate function and purpose within an app. The model of an app will determine how information is organized. The view is what is displayed for the user. The controller defines routes that user can take and what responses will be given to those routes.
  Researched answer:
    Together, MVC components create a full-stack app. If you use two different technologies (like Rails and React) to make an app, it's considered to be decoupled. In such an app, React will be the View component, and Rails will hold the Model and Controller. The model is the database layer. The controller is the logical center of your app, coordinating the interaction between the user, views, and model.


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer:
    CRUD stands for create, read, update, and destroy. If an app has CRUD, it has the ability to create content, read into the content, update the content upon changes, and delete content when it is no longer being used.

  Researched answer:
    There are 5 HTTP verbs that correspond to CRUD. Post request creates, get reads, put and patch request update, and delete delets.



3. What is a migration? Why would you use one?

  Your answer:
    A migration is a change to your database's schema. You cannot update the schema directly, so you must create migration files to do so. You may need to create a migration to add a column, delete a column, or rename a column in your schema.

  Researched answer:
    Active Records track which migrations have been made and update your schema to match the structure of your database. A migration is a subclass of ActiveRecord.



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer:
    A Person has_many Computers and a Computer belongs_to a Person. The Computer model would hold the foreign key because they belong to a single Person. 
  Researched answer:
    A Computer model will have columns of properties like processor, screen, storage space, RAM, graphics card, cost, OS. A Person model will have columns of properties as a customer, like name, birthday, email address, credit card number, and mailing address.


5. What is object-relational mapping?

  Your answer:
    Object-relational mapping is using a technology like Rails to change database information (like from within a SQL file) without having to edit the database information directly. Using an ORM is helpful because you can treat each value as an object of a class.

  Researched answer:
    Object-relational mapping is a programming technique for converting data between incompatible systems using OOP languages.


6. What is a gem?

  Your answer:
    A gem is a collection of Ruby files created by others as dependencies for the public to use. Gems are useful tools so that programmers don't have to waste time "reinventing the wheel", but that does also mean you lose a lot of freedoms that you would have if you created a project entirely from scratch.

  Researched answer:
    Gems are the standard for publishing and managing third part libraries.


7. Why is it important to have validations in your application?

  Your answer:
    Validations can check to see if an object's properties follow the model's standards before instantiation. They can ensure that every property exists so that no nil values are created. They are also used to make sure usernames are unique and passwords are strong. It's important to have a standard protocol for your data so that you can keep your codebase clean and bug-free. If you have predictable data, it's easier to work with.

  Researched answer:
    Validations are used to ensure that only valid data is savaed into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
    RESTful routes are a conventional pattern to follow when structuring different routes for interacting with the server whenever an HTTP request is made by the client.
- JSON
    JavaScript Object Notation is the manner in which JavaSript objects are written. It lists the properties (key:value pairs) and methods within the object. JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects.
- API
    Application programming interfaces are computing interfaces which define interactions between multiple software intermediaries.
- Endpoints
    An endpoint is a route defined by a rails application that will perform some form of action.
- Strong params
    With strong parameters, Action Controller Parameters are forbidden to be used in Active Model mass assignments until they have been permitted.  