/**
 * Redacting library for nodejs
 * @author Mukul<mukul1904@gmail.com>
 */

const censorData = {};
const utils = require('./utils');

censorData.redact = function (mappings, data) {
   if (!mappings && typeof mappings !== 'object') throw new Error('censorData.redact: first argument must be object');
   if (!data && typeof data !== 'object') throw new Error('censorData.redact: second argument must be object');
   return utils.redactJSON(mappings, data);
}

module.exports = censorData;