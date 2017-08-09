/**
 * @file UTils functions for redacting routine
 * @author Mukul<mukul1904@gmail.com>
 */

function getProp(model, path, def) {
    path = path || '';
    model = model || {};
    def = typeof def === 'undefined' ? '' : def;
    const parts = path.split('.');
    if (parts.length > 1 && typeof model[parts[0]] === 'object') {
        return getProp(model[parts[0]], parts.splice(1).join('.'), def);
    }
    return model[parts[0]] || def;
}

function setProp(data, path, value) {
    const pList = path.split('.');
    const len = pList.length;
    for (let i = 0; i < len - 1; i++) {
        const elem = pList[i];
        if (!data[elem]) data[elem] = {};
        data = data[elem];
    }
    data[pList[len - 1]] = value;
}


/**
 * redactString - Add * at every odd index of String
 *
 * @param  {String} str String to redact
 * @return {String}     Redacted String
 */
function redactString(str) {
    Array.prototype.map.call(str, (x, j) => {
        if (j % 2 === 0) str = `${str.substring(0, j - 1)}*${str.substring(j, str.length)}`;
    });
    return str;
}

/**
 * flatten - Flattends the json
 *
 * Eg. { id: 1, crm: { fname: 'Abc' }, ml: { something: '33'} } will get converted to
 * { id: 1, crm.fname: 1, ml.something: 33 }
 */
function flatten(obj, path = []) {
    if (!obj) {
        return null;
    }
    obj = JSON.parse(JSON.stringify(obj));
    return Object.keys(obj).reduce((result, prop) => {
        if (typeof obj[prop] !== 'object') {
            result[path.concat(prop).join('.')] = obj[prop];
            return result;
        }
        return Object.assign(result, flatten(obj[prop], path.concat(prop), result));
    }, {});
}

const utils = {};
/**
 * redactJSON - Redacts JSON doc
 *
 * @param  {Object} mapping mapping for redacting specific entity
 * @param  {Object} data     array of JSON
 * @return {Object}          description
 */
utils.redactJSON = function (mapping, data) {
    mapping.map((elm) => {
        const key = elm.path;
        const redactedValue = redactString(getProp(data, key, ''));
        setProp(data, key, redactedValue);
    });
    return data;
}

module.exports = utils;