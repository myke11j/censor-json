/**
 * @file This is the demo test run for the package
 * @author Mukul<mukul1904@gmail.com>
 * 
 * @desc For running this simple go in your shell and run 
 * `node demo.js` or 
 * `npm run demo`
 */

const censorData = require('../index');
const demoMapping = require('./mapping-demo');

const dummyData = {
    username: 'Mukul',
    alias: 'myke11j',
    age: 22,
    profile: {
        lname: 'Jain',
        fname: 'Mukul'
    },
    professional: {
        company: 'Abc',
        title: 'Xyz'
    },
    others: {
        hobbies: [
            { 'id': 1, 'title': 'poker' },
            { 'id': 2, 'title': 'cycling' }
        ]
    }
}
console.log('Starting redacting dummy data');
const redactedData = censorData.redact(demoMapping, dummyData);
console.log('Redacted Data', redactedData);