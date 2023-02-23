/*
 * Title: Environments
 * Description: Export current environtment object.
 * Author: Abdullah Al Sahariar
 * Date: 24/02/2023
 *
 */

// module scaffolding
const env = {};

// Adding staging object
env.staging = {
  port: 8000,
  name: "staging",
};

// Adding production object
env.production = {
  port: 5000,
  name: "production",
};

// Checking which environment is active
const currentEnv = env[process.env.NODE_ENV]
  ? env[process.env.NODE_ENV]
  : env.staging;

// Exporting the current environment
module.exports = currentEnv;
