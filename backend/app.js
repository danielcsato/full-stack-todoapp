require('dotenv').config();
require('./config/database').connect();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use('', authRoutes);
app.use('', todoRoutes);

app.use('*', (req, res) => {
  res.status(404).json({
    success: 'false',
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'This route does not exists',
    },
  });
});

module.exports = app;
