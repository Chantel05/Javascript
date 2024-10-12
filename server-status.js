const express = require('express');
const statusMonitor = require('express-status-monitor');

const app = express();

// Use the express-status-monitor middleware
app.use(statusMonitor());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});








/*
const express = require('express');
const statusMonitor = require('express-status-monitor');
const nodemailer = require('nodemailer');

const app = express();

app.use(statusMonitor());

app.get('/', (req, res) => {
    res.send('Server is up and running!');
   });

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
*/


