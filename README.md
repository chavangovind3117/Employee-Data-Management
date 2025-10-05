Employee Data Management Application

A full-stack CRUD (Create, Read, Update, Delete) application built to manage a list of company employees.
This project was developed as part of the ASE Challenge,demonstrating a clean, modular, and
testable API backend with a responsive React frontend.

✨ Features
Full CRUD Functionality: Create, read, update, and delete employee records.

RESTful API: A well-structured backend API for managing employee data.

Server-Side Validation: Robust input validation on the backend to ensure data integrity.

Automated API Tests: A complete test suite for the backend API to ensure reliability.

Responsive UI: A simple and clean user interface built with React.

🛠️ Tech Stack
Category	Technology
Backend	Node.js, Express.js, Sequelize (ORM), SQLite, Jest, Supertest
Frontend	React, Axios
Dev Tools	Nodemon, express-validator, dotenv

Export to Sheets
🚀 Setup and Run Locally
Prerequisites
Node.js (v16 or higher)

npm (Node Package Manager)

1. Clone the Repository
git clone <your-repository-url>
cd <repository-folder>
2. Backend Setup
The backend server runs on http://localhost:5000.

# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create the environment file
# Create a new file named .env in the /server directory and add the following line:
PORT=5000

# Start the server
npm start
The server will start using nodemon, automatically restarting on file changes.
The first time it runs, it will create a database.sqlite file.

3. Frontend Setup
The frontend React app runs on http://localhost:3000.

# Navigate to the frontend directory from the root folder
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
Your browser should automatically open to the application.

✅ Running the Tests
All backend API tests are written with Jest and Supertest.

To run the tests:

# Navigate to the server directory
cd server

# Run the test command
npm test
This will execute all tests in the employee.test.js file and show the results in the console.

📝 Assumptions and Design Choices
Backend Architecture
Modular Structure (MVC-like): The backend is organized into models, routes, controllers, and middlewares folders. 
This separation of concerns makes the codebase cleaner, easier to maintain, and scalable.

Sequelize ORM: Instead of writing raw SQL queries, I used Sequelize to interact with the database. 
This speeds up development, reduces potential SQL injection vulnerabilities, and allows for easy data validation directly within the models.

SQLite Database: For this challenge, a simple, file-based database like SQLite is ideal. 
It requires no separate database server setup, making the project easy for anyone to clone and run instantly.

Route-Level Validation: I used express-validator to create a validation middleware. 
This ensures that all incoming data is sanitized and validated before it reaches the business logic in the controller. 
This approach provides clearer error messages to the client and is more efficient than relying solely on database-level validation.

Frontend Workflow
React & Create React App: I chose React for its component-based architecture. Create React App was used for a fast, boilerplate-free setup.

Client-Side State Management: The application follows a standard single-page app (SPA) workflow. 
It first fetches the list of employees to populate its state. This state now includes the database id for each employee. 
For any subsequent UPDATE or DELETE operations, the frontend uses this stored id to communicate with the API, as a client wouldn't know the primary key otherwise.

Testing Strategy
Test Isolation: The test suite is designed so that each test is independent. Before all tests, the database is synced, and after each test, the database is wiped clean.
This ensures that the outcome of one test does not affect another, leading to reliable and predictable test results.

API-Level Testing: The tests are written to interact with the API endpoints (/api/employees) rather than directly testing controller functions. 
This approach more accurately simulates how a client would use the API and ensures the entire request-response cycle (routing, validation, controller logic) works correctly.
