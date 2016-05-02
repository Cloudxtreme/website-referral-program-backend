'use strict';
/*
 *  Boilerplate: This configuration file will be merged with local/remote configurations during build/webtask creation
 *
 *  All secrets should go under the `secret` section, the rest of configuration params should go under `params`
 *
 */

const config = {
  baseUri: '/api',
  // Secrets
  secret: {},
  // Configuration parameters
  param: {}
};

module.exports = () => config;
