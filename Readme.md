📁 Project Structure (MVC)
bash
Copy
Edit
/auth-api
  ├── /controllers
  │     └── authController.js
  ├── /models
  │     └── userModel.js
  ├── /middlewares
  │     └── authMiddleware.js
  ├── /routes
  │     └── authRoutes.js
  ├── /config
  │     └── db.js
  ├── /views
  │     └── (optional for rendering error pages or success if needed)
  ├── .env
  ├── app.js
  ├── package.json
  └── README.md



  This is my project structure

  so i have installed some dependencies 

  npm init -y
npm install express mongoose bcryptjs jsonwebtoken dotenv
npm install --save-dev nodemon

.env folder
PORT=5000
MONGO_URI=mongodb://localhost:27017/authDB
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h

db.js
authController.js
authMiddleware.js
userModule.js
authRoutes.js
app.js

these are my folder and this folder contains several code for the authorization and authentication concepts

Postman Api:

1. Register User

POST /api/auth/register

Body (JSON):

json
Copy
Edit
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456"
}
Success Response: 201

json
Copy
Edit
{
  "message": "User registered successfully"
}
2. Login User

POST /api/auth/login

Body (JSON):

json
Copy
Edit
{
  "email": "john@example.com",
  "password": "123456"
}
Success Response: 200

json
Copy
Edit
{
  "token": "your.jwt.token"
}