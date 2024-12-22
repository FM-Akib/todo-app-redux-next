# ToDo App

Live Link: [https://todo-app-ochre-sigma.vercel.app/](https://todo-app-ochre-sigma.vercel.app/)

## Description

This is a **ToDo App** built using **Next.js**, **Redux**, **Express**, and **MongoDB**. It provides a comprehensive solution for task management, including features such as CRUD operations, task filtering, and state management using Redux and Redux Toolkit. This project allowed me to refine my skills in:

- Local state management.
- API management using Redux and Redux Toolkit.

## Features

- Add, update, delete, and read tasks.
- Filter tasks based on priority (Low, Medium, High).
- Full integration with a MongoDB database for persistent storage.
- Efficient API management using Redux Toolkit.
- Seamless user interface built with Next.js.

## Technologies Used

- **Next.js**: Frontend framework for React with server-side rendering.
- **Redux & Redux Toolkit**: State management library for managing local and global state.
- **Express**: Backend framework for handling API routes.
- **MongoDB**: NoSQL database for storing tasks.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB instance running locally or on a cloud service like MongoDB Atlas.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=<your-mongodb-uri>
   NEXT_PUBLIC_API_URL=<your-api-url>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

5. Start the Express server:
   ```bash
   cd server
   npm start
   ```
   The API will be available at `http://localhost:3005`.

### Deployment

1. Build the app for production:
   ```bash
   npm run build
   ```

2. Deploy the app using Vercel or another hosting provider.

## API Endpoints

### Base URL: `http://localhost:3005`

- **GET /tasks**: Retrieve all tasks.
- **POST /tasks**: Add a new task.
- **PUT /tasks/:id**: Update a task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.
- **GET /tasks?priority=<priority>**: Filter tasks by priority (low, medium, high).



