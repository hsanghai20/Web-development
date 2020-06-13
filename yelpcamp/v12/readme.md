# Link of the app
* https://yelp-camp-s.herokuapp.com/
# v1
# YelpCamp
*Add Landing Page	
*Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name	* Image

# Layout and Basic Styling
*Create our header and footer partials
*Add in Bootstrap

# Creating New Campgrounds
*Setup new campground POST Route
*Add in body-parser
*Setup route to show form
*Add basic unstyle form

# Style the campgrounds page
*Add a better header/title
*Make campgrounds display in a grid

# Style the Navbar and Form
*Add a navbar to all templates
*Style the new campground form

# Databases
## Intro to Databases
* What is a database?
* SQL vs. NoSQL

# v2
# Adding moongoose to our YelpCamp app so that it save all the data
# Add Mongoose
*Install and configure mongoose
*Setup campground model
*Use campground model inside of our routes!

# Show Page
* Review a restful route we have seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show rooute/template

# v3
# Refactor mongoose code
* Create a models directry
* Use module exports
* Require everything correctly

# Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

# Add a comment model!
* Make our errors go away
* Display comments on the campground page

# v4
# Create New/Create
* Discuss nested route
* Add the comment new and create route
* Add the new comment form


# v5
# Style show page
* Add sidebar to show page
* Display comment nicely

# v6
# Auth pt 1-Add user Model
* Install all packages needed for auth
* Define user model

# Auth pt 2- Register
* configure Passport
* Add register route
* Add register template

# Auth pt 3- Login
* Add login routes 
* Add login templates

# Auth Pt 4 - Logout
* Add logout route
* Prevent User from adding a comment if not signin
* Add links to navbar
* Show hide auth links correctly

# Auth pt 5- Show/Hide links
* Show/hide auth links in navbar correctly 

# V7
# Refactor the routes 
* Basically make our app.js simple and smaller so that its easy to understand

# v8
# Users+ comment
* Associate users and comment
* Save author's name to a comment automatically

# v9
# Users+ campground
* Prevent the unauthorised user from creating a campground
* Save username + id to newly created campground

# v10
# Editing campground
* Add method override
* Add edit route to campgrounds
* Add link to edit page 
* Add update route
* Fix $set problem

# Delete campground
* Add destroy route 
* Add delete button

# Authorization part 1- campgrounds
* User can only edit his or her campgrounds
* User can only delete his or her campgrounds
* Hide/show edit and delete buttons 

* authorization means to give permission of different things which a particular user can do
* and authentication just logging in and checking in who you are

# Editting comments
* Add edit route to comments
* Add edit button 
* Add update button

# Deleting comments
* Add destroy route
* Add delete button

# Authorisation part 2: comments
* User can only edit his or her comment
* User can only delete his or her comment
* Hide/show edit and delete buttons 
* refactor middleware

# v11
# Adding in flask
* Install and configure connect-flask
* Add bootstrap alerts to header

# Landing page refactor 
* set the slide show in the landing page
* install nodemon it is a module which make changes we dont have to restart server again
* to check full tut check github nax3t/background slider 

# Dynamic price feature list
* change schema of campground

# v11_deployed
# Deploy to heroku
* First set the git init and commit everything we want in our app to run
* login to heroku account by using heroku login -i command
* heroku create command will help us to make a link for our app
* set start script to package.json so that heroku knows about start point
* only do this after every thing get commited
* git push heroku master
* also add var PORT= process.env.PORT || 3000; so that it listen to heroku app port
* "heroku run" this command act as we are connect to heroku and now we can do heroku run ls and
  all command which we do in terminal (by this we can install the package we missed)
* open particular app in console write "heroku git:remote -a <app_name>" 
# Connecting to database
* Use mongo lab
* see steps to make a database cluster on net

# Enviroment variables
* as when we want to add some new feature we dont want changes to done on database online
* so we work on local database to check that out
* for that we set up env variable once in heroku to set that url to connect to database
* and locally we set url as default
* in heroku set that in settings and config vars.
