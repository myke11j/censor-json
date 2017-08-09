# censor-json
JSON redacting library for nodejs

# Install

```
npm install --save censor-json
```

# Usage

Its usage ius quite simple.
You will need two things to use it
- A json object which you want to redact/censor
- A mapping object, i.e, array of paths which will be redacted.

```
const censorData = require('censor-json');
censorData.redact(mapping, data);
```

# Demo

```
const censorData = require('censor-json');
const data = {
    name: 'Ned Stark',
    house: 'Stark'
    details: {
        reason_of_death: 'honor',
        killed_by: 'Illyn payne, Joffery, Baelish'
    },
    motto: 'Winter is Coming!'
}

const mapping = {
    { path: 'name' },
    { path: 'motto' },
    { path: 'details.reason_of_death' }
}

censorData.redact(mapping, data); 

/*
Output: {
    name: 'N*d *ta**',
    house: 'Stark'
    details: {
        reason_of_death: '*on**',
        killed_by: 'Illyn payne, Joffery, Baelish'
    },
    motto: '*i**er i* C*m**g!'
}
*/
```

# Future

In future version I will be adding more features like
- zipping of files
- uploading to S3

If more features you want to be in this package, please let me know by creating a request [here](https://github.com/myke11j/censor-json/issues).

Also use this link to let me know of any bugs or issues.
