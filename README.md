# Banking System

## Description

This project is a full-stack banking system application built with Node.js and Express for the backend, and React (using Vite) for the frontend. It handles user and account management, provides JWT-based authentication, and allows users to perform transactions.

## Features

- User registration and login
- JWT-based authentication
- Account balance retrieval
- Money transfer between accounts
- User and account management
- Responsive frontend built with React

## Installation

### Backend Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/sanchitpasricha/EasyWallet.git
   cd EasyWallet
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a file named `fig.env` in the `backend` directory and add the following content:

   ```env
   DATABASE_CONNECTION=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the backend server:**

   ```sh
   npm start
   ```

   The backend server will start running on port 3000.

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```sh
   cd ../frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the frontend server:**

   ```sh
   npm run dev
   ```

   The frontend application will start running on the default Vite port.

## Usage

### Backend API Endpoints

- **User Routes**

  - `POST /api/v1/users/signup` - Create a new user
  - `POST /api/v1/users/signin` - Sign in a user
  - `PUT /api/v1/users` - Update user information
  - `GET /api/v1/users/bulk` - Search users

- **Account Routes**
  - `GET /api/v1/accounts/balance` - Get account balance
  - `POST /api/v1/accounts/transactions` - Initiate a transaction

### Frontend

The frontend application provides a user interface for:

- Signing up and signing in
- Viewing account balance
- Sending money to other users

### Authentication Middleware

Use the `authMiddleware` to protect your routes. Add it as middleware to any route you want to protect:

```js
const { authMiddleware } = require("./middleware");

app.use("/api/v1/protected-route", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route" });
});
```

## Technologies Used

### Backend

- Node.js
- Express
- JWT
- Mongoose
- dotenv
- bcrypt
- Zod

### Frontend

- React
- React Router DOM
- Axios
- Recoil

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

Cretaed using ChatGPT to save time !
