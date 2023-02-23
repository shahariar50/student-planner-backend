/*
 * Title: Environments
 * Description: Export active environtment object.
 * Author: Abdullah Al Sahariar
 * Date: 24/02/2023
 *
 */

// dependencies

// module scaffolding
const env = {};

// Added staging
env.staging = {
  port: 5000,
  name: "staging",
};

env.production = {
  port: 8000,
  name: "production",
};
