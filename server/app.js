// backend/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employee.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/employees', employeeRoutes);

app.get('/', (req, res) => {
  res.send('API is running successfully!');
});

module.exports = app;