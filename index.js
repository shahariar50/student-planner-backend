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
const { handleReqRes } = require("./helpers/reqResHandler");
const data = require("./lib/data");

// module scaffolding
const app = {};

// data.create(
//   "users",
//   "newUser",
//   { name: "Sahariar", phone: "01625781386" },
//   (err) => {
//     console.log(err);
//   }
// );

// data.update(
//   "users",
//   "newUser",
//   { name: "Touhid", phone: "01625781386" },
//   (err) => {
//     console.log(err);
//   }
// );

// data.read("users", "newUser", (err) => {
//   console.log(err);
// });

data.delete("users", "newUser", (err) => {
  console.log(err);
});

// Configuration
app.config = {
  port: env.port,
};

// Create server function
app.createServer = () => {
  const server = http.createServer(handleServer);

  server.listen(app.config.port, () => {
    console.log(`listening port ${app.config.port}...`);
  });
};

// Handle server
// Assigning handle server
const handleServer = handleReqRes;

// Calling Server
app.createServer();
