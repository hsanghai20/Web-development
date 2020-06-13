v1
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

29
# Databases
## Intro to Databases
* What is a database?
* SQL vs. NoSQL

v2
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

v3
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


