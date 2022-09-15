# Design/Implementation
This project is well structured according to Industry standards

## Structure

### app.js
app.js is used to start the app

### middlewares
This contains the middlewares

### routes
This contains the files that perform the routing

### controllers
This contain the files that perform the logic

### utils
This contain the files that perform reusable logic

## Deployment

### Hosting
The application is deployed on a Digital Ocean Ubuntu Droplet

### SSL Certificate
Let's encrypt - a free, automated, and open certificate authority was used

## How does it work
 ### Download the code
 ### Navigate inside the project folder on terminal
 ### Do a npm install for installing all the project dependencies
 ### Then npm start (using nodemon) OR node app.js to run the app on localhost

 ## Making a request

 ### Base URL
 The Base url is https://dobengine.taxit.com.ng

 ### Endpoint
 The endpoint is /howold

 ### Request
 Request type: GET
 Query Params format: The parameter is dob and it takes a timestamp
 Sample request: https://dobengine.taxit.com.ng/howold?dob=768826321000

  