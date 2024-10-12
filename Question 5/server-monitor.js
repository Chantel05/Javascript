const serverIP = '192.168.1.100';
const interval = 5 * 60 * 1000; // 5 minutes

function checkServerStatus() {
 ping(serverIP, function(error, ms) {
   if (error) {
     console.log(`Server is down. Starting it...`);
     startServer();
   } else {
     console.log(`Server is up. Ping response: ${ms} ms`);
   }
 });
}

function startServer() {
 // Code to start the server goes here
 console.log('Server is starting...');
}

// Start the monitoring loop
setInterval(checkServerStatus, interval);







/*
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
*/