## What I did in server.js file



1. Setting Up Express and Dependencies


- Express: Express is a web framework for Node.js. It helps to build web applications and APIs easily.

- Mongoose: Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and translates between objects in code and MongoDB documents.

- bodyParser: This middleware parses incoming request bodies in a middleware before your handlers, available 
under the req.body property.

- cors: CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated.

- bcrypt: This is a library to help you hash passwords, making them secure when stored.






2. Initializing Express Application

- An Express app is created by calling express().

- The port variable is set to 5000, meaning the server will listen on port 5000.






3. Middleware Setup

- cors() is used to allow cross-origin requests.

- bodyParser.json() is used to parse JSON request bodies.






4. Connecting to MongoDB

- Mongoose is used to connect to a MongoDB database named Test running on localhost.

- If the connection is successful, a message is logged; otherwise, the error is logged.





5. Defining the User Schema

- A UserSchema is defined with fields: UserName, Email, and password.

- Both UserName and Email are marked as unique and required, meaning each must be distinct in the database.

- The uniqueValidator plugin is added to provide a meaningful error message when a unique constraint is violated.






6. Creating the User Model
- The User model is created based on the UserSchema. This model represents the Users collection in MongoDB.





7. SIGNUP Route

- This route handles user registration.
When a POST request is made to /api/users, the UserName, Email, and password are extracted from the request body.

- A new user is created and saved to the database.

- If the save operation is successful, the newly created user is returned as a JSON response.

- If there is a validation error (like a duplicate UserName or Email), the error messages are captured and sent back to the client.

- If there’s any other error, a generic server error message is sent.






8. LOGIN Route

- This route handles user login.

- When a POST request is made to /api/login, the identifier (which can be a UserName or Email) and password are extracted from the request body.

- The code searches the database for a user with either the UserName or Email matching the identifier.

- If no matching user is found, a message is returned saying that there is no user with the given identifier.

- If a user is found, the provided password is compared with the stored hashed password using bcrypt.

- If the passwords match, a success message is returned.

- If the passwords don't match, an error message indicating an invalid password is returned.

- If any server error occurs, a generic server error message is returned.



9. Starting the Server

- The server is set to listen on port 5000.

- A message is logged to the console to indicate that the server is running and on which port.

- This code represents a basic setup for handling user signup and login in a Node.js application using Express and MongoDB with Mongoose. The key focus here is on data validation, secure password handling with bcrypt, and proper error handling.

