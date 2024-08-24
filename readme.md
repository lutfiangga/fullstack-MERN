
# User Management CRUD App

A simple user management application built with the MERN stack (MongoDB, Express, React, Node.js) that allows you to create, read, update, and delete (CRUD) user data.

## Features

- Add a new user
- View a list of users
- Edit user details
- Delete a user

## Technologies Used

- **Frontend:**
  - React.js
  - Axios (for HTTP requests)
  - Tailwind CSS (for styling)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (via Mongoose)

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running on your machine

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/user-management-crud-mern.git
cd user-management-crud-mern
```

### 2. Backend Setup

 #### 1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

 #### 2. Install the dependencies:

   ```bash
   npm install
   ```

 #### 3. Create a `.env` file in the `backend` directory and add your MongoDB connection string:

   ```bash
   PORT_SERVER=your_server_port
   MONGO_URI=your_mongo_uri/your_database
   ```

 #### 4. Start the backend server:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`.

### 3. Frontend Setup

 #### 1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

 #### 2. Install the dependencies:

   ```bash
   npm install
   ```

 #### 3. Create a `.env` file in the `frontend` directory and add the API URL:

   ```bash
   VITE_PRIVATE_API_URL=your_api_url
   ```

 #### 4. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:3000`.

## Project Structure

```
.
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── App.jsx
    │   ├── main.jsx
    ├── .env
    └── package.json
```

## Usage

- **Add User:** Click the "Add User" button and fill in the form to add a new user.
- **Edit User:** Click the "Edit" button next to a user to update their information.
- **Delete User:** Click the "Delete" button next to a user to remove them from the database.