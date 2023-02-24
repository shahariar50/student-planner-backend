/*
 * Title: User Handler
 * Description: This file manage the request from user route
 * Author: Abdullah Al Sahariar
 * Date: 25/02/2023
 *
 */

// dependencies

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
  callback(200, { message: "This route is for users." });
};

module.exports = handler;
