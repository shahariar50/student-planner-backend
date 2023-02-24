/*
 * Title: Data manupulation handlers
 * Description: This file carrying some helper modules to run CRUD operetion with the data file.
 * Author: Abdullah Al Sahariar
 * Date: 25/02/2023
 *
 */

// dependencies
const path = require("path");
const fs = require("fs");

// module scaffolding
const lib = {};

lib.baseUrl = path.join(__dirname, "../.data/");

lib.create = (dir, file, data, callback) => {
  fs.open(`${lib.baseUrl + dir}/${file}.json`, "wx", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      const stringifyData = JSON.stringify(data);
      fs.writeFile(fileDescriptor, stringifyData, (err) => {
        if (!err) {
          fs.close(fileDescriptor, (err) => {
            if (!err) {
              callback(false);
            } else {
              callback("Error to close the file.");
            }
          });
        } else {
          callback("Error writing data.");
        }
      });
    } else {
      callback("This file is already exist.");
    }
  });
};

lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.baseUrl + dir}/${file}.json`, "utf-8", (err, data) => {
    callback(err, data);
  });
};

lib.update = (dir, file, data, callback) => {
  fs.open(`${lib.baseUrl + dir}/${file}.json`, "r+", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      fs.ftruncate(fileDescriptor, (err) => {
        if (!err) {
          const stringifyData = JSON.stringify(data);
          fs.writeFile(fileDescriptor, stringifyData, (err) => {
            if (!err) {
              fs.close(fileDescriptor, (err) => {
                if (!err) {
                  callback(false);
                } else {
                  callback("Error to close the file.");
                }
              });
            } else {
              callback("Error to update data.");
            }
          });
        } else {
          callback("Error to truncate the file.");
        }
      });
    } else {
      callback("Error to open the file.");
    }
  });
};

lib.delete = (dir, file, callback) => {
  fs.unlink(`${lib.baseUrl + dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback("Error to delete the file.");
    }
  });
};

module.exports = lib;
