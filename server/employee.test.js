// backend/employee.test.js
const request = require('supertest');
const app = require('./app'); // Import your express app
const sequelize = require('./config/database');
const Employee = require('./models/employee.model');

// Before any tests run, connect to the database
beforeAll(async () => {
  await sequelize.sync({ force: true }); // Use force: true to reset the DB for a clean test run
});

// After each test, clean up the database
// afterEach(async () => {
//   await Employee.destroy({ where: {} });
// });

// After all tests have run, close the database connection
afterAll(async () => {
  await sequelize.close();
});

describe('Employee API', () => {
  // Test for POST /api/employees (Create)
  it('should create a new employee', async () => {
    const res = await request(app)
      .post('/api/employees')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        position: 'Tester'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Test User');
  });

  // Test for GET /api/employees (Read All)
  it('should fetch all employees', async () => {
    await Employee.create({ name: 'User One', email: 'user1@example.com', position: 'Dev' });
    const res = await request(app).get('/api/employees');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2); // Should be 2 now (including the one created in the previous test)
    expect(res.body[1]).toHaveProperty('name', 'User One');
  });

  // Test for GET /api/employees/:id (Read One)
  it('should fetch a single employee by id', async () => {
    const employee = await Employee.create({ name: 'User Two', email: 'user2@example.com', position: 'Dev' });
    const res = await request(app).get(`/api/employees/${employee.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', employee.id);
  });

  // Test for PUT /api/employees/:id (Update)
  it('should update an employee', async () => {
    const employee = await Employee.create({ name: 'User Three', email: 'user3@example.com', position: 'Dev' });
    const res = await request(app)
      .put(`/api/employees/${employee.id}`)
      .send({
        name: 'User Three Updated',
        email: 'user3.updated@example.com',
        position: 'Senior Dev'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'User Three Updated');
  });

  // Test for DELETE /api/employees/:id (Delete)
  it('should delete an employee', async () => {
    const employee = await Employee.create({ name: 'User Four', email: 'user4@example.com', position: 'Dev' });
    const res = await request(app).delete(`/api/employees/${employee.id}`);
    expect(res.statusCode).toEqual(204);
  });
});