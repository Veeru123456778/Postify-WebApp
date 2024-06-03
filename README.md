# Postify

Postify is a web application for discovering posts. It allows users to securely create an account, log in, view posts.

## Features

- **User Authentication**: Users can create an account and log in securely.I have used JsonWebToken for secure authentication ,also I have applied a express-rate-limiter and its limit is 100 requests per min.
   Also i have made an authentication middleware which ensures that users have token or not for the authentication and authorization of the user.
- **Image Upload**: I have used multer middleware for the image upload and then i am uploading the image on cloudinary.
- **View Posts**: Users can browse through posts created by other users(I have used an API for fetch posts).
- **Responsive Design**: The application is responsive and works well on desktop and mobile devices.

## Technologies Used

- **Frontend**:
  - React.js: Frontend library for building user interfaces.
  - React Router: Library for handling navigation within the application.
  - Tailwind CSS: Utility-first CSS framework for styling the user interface.
  - Axios: Library for making HTTP requests to the backend server.
  - ContextAPI: I have used context api for the state management so that all hildren can access data from the context Provider.

- **Backend**:
  - Node.js: JavaScript runtime for running the backend server.
  - Express.js: Web framework for building RESTful APIs.
  - MongoDB: NoSQL database for storing user data and posts.
  - Mongoose: MongoDB object modeling tool for Node.js.

- **Deployment**:
  - I have deployed my frontend and backend on vercel.
  - You can visit to the application through "https://postify-web-app-frontend.vercel.app/"


