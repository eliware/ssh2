'use strict';

const assert = require('assert');
const ssh2 = require('../lib');

assert.strictEqual(typeof ssh2.Client, 'function');
assert.strictEqual(typeof ssh2.Server, 'function');
assert.strictEqual(typeof ssh2.utils.parseKey, 'function');
console.log('Smoke tests passed');
