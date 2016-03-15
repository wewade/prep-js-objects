'use strict';

const Test = require('tape');
const Util = require('util');
const Fs = require('fs');
const Vm = require('vm');
const Path = require('path');

let filePath = Path.resolve(__dirname, './../objects.js');
const IndexFileRaw = Fs.readFileSync( filePath, { encoding : 'utf8' });

let sandbox = {};
const Script = new Vm.Script(IndexFileRaw);
Script.runInNewContext(sandbox);

Test('js-objects', suite => {
  Test('Declare Two Variables', t => {
    t.ok(sandbox.a, 'a variable exists.');
    t.equals(typeof (sandbox.a), 'number', 'a variable is assigned to a random number.');
    t.ok(sandbox.b, 'b variable exists.');
    t.equals(typeof (sandbox.b), 'number', 'b variable is assigned to a random number.');
    t.end();
  });

  suite.end()
})