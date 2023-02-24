/*
 * Title: Handle Request and Responces
 * Author: Abdullah Al Sahariar
 * Date: 24/02/2023
 *
 */

// dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const { noutFoundHandler } = require("../handlers/notFoundHandler");
const routes = require("../routes");

// module scaffolding
const handle = {};

handle.handleReqRes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const trimmedUrl = pathName.replace(/^\/+|\/+$/g, "");
  const method = req.method;
  const decoder = new StringDecoder("utf-8");
  const queryStringObj = parsedUrl.query;
  const headerObject = req.headers;

  const requestProperties = {
    parsedUrl,
    pathName,
    trimmedUrl,
    method,
    queryStringObj,
    headerObject,
  };

  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    decoder.end();

    const currentHandler = routes[trimmedUrl]
      ? routes[trimmedUrl]
      : noutFoundHandler;

    currentHandler(requestProperties, (status, payload) => {
      const newPayload = JSON.stringify(payload);

      res.setHeader("Content-Type", "application/json");
      res.writeHead(status);

      res.end(newPayload);
    });

    console.log(realData);
  });
};

module.exports = handle;
