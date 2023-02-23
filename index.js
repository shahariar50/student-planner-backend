/*
 * Title: Student Planner
 * Description: A project to manage and track daily life of an student.
 * Author: Abdullah Al Sahariar
 * Date: 24/02/2023
 *
 */

// dependencies
const http = require("http");
const env = require("./helpers/environment");

// module scaffolding
const app = {};

// Configuration
app.config = {
  port: env.port,
};

// Create server function
app.createServer = () => {
  const server = http.createServer(() => {});

  server.listen(app.config.port, () => {
    console.log(`listening port ${app.config.port}...`);
  });
};

// Handle server
//TODO: Assign handle server
const handleServer = 0;

// Calling Server
app.createServer();
