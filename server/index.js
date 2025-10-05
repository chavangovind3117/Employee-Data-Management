// backend/index.js
const app = require('./app'); // Import the app
const sequelize = require('./config/database');
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log('Database synced successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

startServer();