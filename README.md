# Beyoo-technical-assignment

## Overview:
Welcome to the Beyoo technical assignment!! This assignment is made to guide you through and familiarize you with the technology behind the Beyoo app. By completing this assignment, you learn the basics of the [MEAN stack](https://www.geeksforgeeks.org/introduction-to-mean-stack/) (without the "A" - AngularJS part). By completing this assignment, you demonstrate your ability to work (at the fundamental level) as a NodeJS developer at Beyoo and many other companies. This assignments goes over the following components:
* Server Provider: Google Cloud Service
* OS: Ubuntu 16.04
* Runtime (Language): NodeJS (Javascript)
* Web Framework: ExpressJS
* Database Management System (DBMS): MongoDB
* Object-Relational Mapping: Mongoose

This assignment already assumes your knowledge in the following topics:
* Working on Linux environment.
* Working with Git and Github.

**NOTE: Please feel free to ask questions whenever you are stuck! This assignment is meant to guide you, not to test you**

## Task \#1: Create a Ubuntu 16.04 VPS
Follow this [guide](https://medium.com/@hbmy289/how-to-set-up-a-free-micro-vps-on-google-cloud-platform-bddee893ac09) to create a free Google Cloud Service account, and create your own free-forever VPS. **NOTE: USE A UBUNTU 16.04 IMAGE INSTEAD OF THE DEFAULT DEBIAN LINUX**.

Then, follow this [guide](https://docs.bitnami.com/google/faq/administration/use-firewall/) to open port 3000 of your server.

Follow this [guide](https://cloud.google.com/compute/docs/instances/connecting-to-instance) to SSH into the Linux shell of your server.

## Task \#2: Install MongoDB on the VPS
SSH in to the VPS created in Task \#1 and then follow this [guide](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04) (up to step 2) to install MongoDB on the VPS.

## Task \#3: Get the example NodeJS server up and running.

### 3.1: Fork the example code from this Github repository.

### 3.2: Install the Node dependencies
```bash
cd Beyoo-technical-assignment
npm install
```

### 3.3: Connect your server with MongoDB
This is to be done in
```bash
/db/database.js
```
(Please edit the `uri` variable to your local MongoDB URI)

### 3.4: Run the node server
```
npm run start
```
Then, you can check whether the server is running at: [http://\<your-server-ip\>:3000/user](http://\<your-server-ip\>:3000/user). Make sure [http://\<your-server-ip\>:3000/user](http://\<your-server-ip\>:3000/user) returns an empty JSON object successfully.

## Task \#4: Add code to create new user
### 4.1 Install Postman
[Postman](https://www.postman.com/) is a powerful tool to debug HTTP Rest APIs (In particular, we'll be using Postman to send GET/POST HTTP request against our endpoint).

### 4.2 Add a route to create new user
Add a route to accept **POST** request to /user endpoint.
Hint: file need to be edited:
```bash
/route/user.js
```

### 4.3 Add logic to create new user
Add code to handle API request in
```bash
/api/user.js
```
For each request, create a new User object with the following fields provided by the Request caller:
```json
{
  "fullname": "String",
  "username": "String",
  "password": "String",
  "birthday": "String"
}
```
Note: You can test the [http://\<your-server-ip\>:3000/user](http://\<your-server-ip\>:3000/user) endpoint using Postman

## Task \#5: Submit this assignment
### 5.1 Code:
Please make a Pull Request of your code to this repository to submit assignment.
### 5.2 Video:
Please capture a short video showing
1. User List before creating a new one using Postman GET [http://\<your-server-ip\>:3000/user](http://\<your-server-ip\>:3000/user)
2. Create a new user using Postman POST [http://\<your-server-ip\>:3000/user](http://\<your-server-ip\>:3000/user)
3. User list after creating a new one using Postman GET [http://\<your-server-ip\>:3000/user](http://\<your-server-ip\>:3000/user)
And submit it to our slack channel

# THAT'S IT!!! THANK YOU :)
