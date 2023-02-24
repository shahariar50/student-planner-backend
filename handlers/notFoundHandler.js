/*
 * Title: Not found handler
 * Description: This file manage the request of routes that not exist
 * Author: Abdullah Al Sahariar
 * Date: 25/02/2023
 *
 */

// dependencies

// module scaffolding
const handler = {};

handler.noutFoundHandler = (requestProperties, callback) => {
  callback(404, { message: "This route is not found." });
};

module.exports = handler;
