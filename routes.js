/*
 * Title: Routes
 * Description: List of all api routes
 * Author: Abdullah Al Sahariar
 * Date: 25/02/2023
 *
 */

// dependencies
const { userHandler } = require("./handlers/userHandlers");

// module scaffolding
const routes = {
  user: userHandler,
};

module.exports = routes;
