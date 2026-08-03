/* eslint-env node */
const { handler: originalHandler } = require('../../dist/main');

exports.handler = async (event, context) => {
  return originalHandler(event, context);
};