Employee Data Management

This is a full-stack CRUD (Create, Read, Update, Delete) application built for the ASE Challenge. The project features a modular and tested Node.js/Express backend API and a responsive, component-based React frontend.

The application allows a user to manage a list of employees, including adding new records, viewing all records, updating existing ones, and deleting them from the system.

✨ Features
Full CRUD Functionality: Create, read, update, and delete employee records.

RESTful API: A well-structured backend API for managing employee data.

Global State Management: Uses React's Context API to manage application state, avoiding prop drilling.

Reusable Components: Features a modular frontend with reusable components for forms and modals.

Server-Side Validation: Ensures data integrity with robust input validation on the backend.

Automated API Tests: A complete test suite for all backend CRUD endpoints using Jest and Supertest.


🛠️ Tech Stack

Category	Technology
Backend	Node.js, Express.js, Sequelize (ORM), SQLite, Jest, Supertest
Frontend	React, Context API, Axios
Dev Tools	Nodemon, express-validator, dotenv

🚀 Setup and Run Locally

Of course. Here is a complete README.md file for your project, tailored to the submission requirements and the architecture we've built.

You can copy and paste the entire content below into a README.md file in the root of your project repository.

Employee Data Management
This is a full-stack CRUD (Create, Read, Update, Delete) application built for the ASE Challenge. The project features a modular and tested Node.js/Express backend API and a responsive, component-based React frontend.

The application allows a user to manage a list of employees, including adding new records, viewing all records, updating existing ones, and deleting them from the system.

✨ Features
Full CRUD Functionality: Create, read, update, and delete employee records.

RESTful API: A well-structured backend API for managing employee data.

Global State Management: Uses React's Context API to manage application state, avoiding prop drilling.

Reusable Components: Features a modular frontend with reusable components for forms and modals.

Server-Side Validation: Ensures data integrity with robust input validation on the backend.

Automated API Tests: A complete test suite for all backend CRUD endpoints using Jest and Supertest.

🛠️ Tech Stack:-
    Category	Technology
    Backend	    Node.js, Express.js, Sequelize (ORM), SQLite, Jest, Supertest
    Frontend	React, Context API, Axios
    Dev Tools	Nodemon, express-validator, dotenv


🚀 Setup and Run Locally:-

Prerequisites:-

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

 The server will start using nodemon. The first time it runs, it will automatically create a database.sqlite file in the server directory.

3. Frontend Setup
    The frontend React app runs on http://localhost:3000.
    # From the root project folder, navigate to the frontend directory
    cd frontend

    # Install dependencies
    npm install

    # Start the React development server
    npm start

    Your default browser should automatically open a new tab with the application running.


✅ Running the Tests
    All backend API tests are written with Jest and Supertest.

    To run the tests:

    # Navigate to the server directory
    cd server

    # Run the test command
    npm test

    This command executes all test suites and displays a report in the console, confirming that all API endpoints are working as expected.


📝 Assumptions and Design Choices

Backend Architecture :-

Modular Structure (MVC-like): The backend is organized into models, routes, controllers, and middlewares. This separation of concerns was chosen to create a clean, maintainable, and scalable codebase.

Sequelize ORM & SQLite: I chose Sequelize to abstract away raw SQL queries, which speeds up development and helps prevent SQL injection vulnerabilities. SQLite was selected as the database because it's file-based and requires no separate installation, making the project easy for anyone to set up and run instantly.

Route-Level Validation: Instead of relying only on database constraints, I used express-validator to create a validation middleware. This "fail-fast" approach checks incoming data at the earliest possible stage, providing immediate and clear feedback to the client without unnecessary database interaction.

Frontend Architecture :-

Global State Management (Context API): To avoid "prop drilling" (passing state and functions down through many component levels), I used React's Context API. This creates a centralized EmployeeContext that provides the employee data and CRUD functions to any component that needs them, resulting in cleaner and more decoupled components.

Service Layer: All API communication logic is centralized in src/services/employeeService.js. This separates the data-fetching logic from the UI components, making the code more organized, reusable, and easier to maintain. If an API endpoint ever changes, it only needs to be updated in one place.

Reusable Form Component: To adhere to the DRY (Don't Repeat Yourself) principle, a single EmployeeForm.js component is used for both adding a new employee and editing an existing one. The component's behavior (e.g., button text, submit logic) is controlled by the props passed to it, making it a flexible and efficient solution.