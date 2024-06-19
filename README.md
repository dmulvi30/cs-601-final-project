# CS-601-final-project
This repo contains the code and files for my final project for the CS-601 Web-Application course.

## Application Design
The application utilizes the Express.js framework [1]. These are some of the key components of the application:
- /public/data
    - countries.json
    This file contains the data used to populate the country table on the 'Countries Visited' page.
- /public/javascripts:
    - contact.js
    This contains the form validation logic for the 'Contact Me' page.
    - countries.js
    This contains the business logic for creating the countries visited table on the 'Countries Visited' page. 
    - travel_photos.js
    This contains the business logic for creating the travel photo slideshow on the 'My Travel' page.
- /public/images
    This directory contains all of the site images.

In addition, all of the pages are created using the Handlebars templating engine [2]. These can all be found in /views. 

## Application Components
The application consists of six pages:
- Home Page
This page provides an introduction to the site and to me. 
- My Education
This page provides information about my educational background.
- My Movies
This page provides information about some of my favorite movies.
- My Travel
This page includes a photo slideshow from some of my travels.
- Countries Visited
This page contains some details of my travels, including a world map and the countries I have visited. The country table is dynamically created from the /data/countries.json file.
- Contact Me
This page includes a contact form with form validation.

## Application Deployment Overview
The application runs on a container deployed to AWS Elastic Container Services [3], and is fronted by an application load balancer that routes traffic to the application on port 443. 

[1] Express.js: https://expressjs.com/

[2] https://handlebarsjs.com/

[3] Amazon Web Services ECS: https://aws.amazon.com/ecs/
