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
  Test('Plain object and adding properties', t => {
    t.ok(sandbox.plainBox, 'plainBox variable exists.');
    t.equals(typeof (sandbox.plainBox), 'object', 'plainBox variable is an object.');
    t.ok(sandbox.plainBox, {}, 'plainBox variable is an empty object.');
    t.equals(Object.keys(sandbox.plainBox).length, 3, 'plainBox variable is an object with 3 properties');
    t.equals(typeof (sandbox.plainBox.color), 'string', 'plainBox.color is a string');
    t.equals(typeof (sandbox.plainBox.size), 'number', 'plainBox.size is a number');
    t.equals((sandbox.plainBox.size) <= 20 && (sandbox.plainBox.size) >= 0, true, 'plainBox.size is a number between 0 and 20');
    t.equals(Array.isArray(sandbox.plainBox.contents), true, 'plainBox.contents is an array');
    t.deepEqual(sandbox.plainBox.contents, [], 'plainBox.contents is an empty array');
    t.end();
  });

  Test('An object with properties declared line by line', t => {
    t.ok(sandbox.stockCar, 'stockCar variable exists.');
    t.equals(typeof (sandbox.stockCar), 'object', 'stockCar variable is an object.');
    t.equals(Object.keys(sandbox.stockCar).length, 5, 'stockCar variable is an object with 5 properties');
    t.equals(typeof (sandbox.stockCar.model), 'string', 'stockCar.model is a string');
    t.equals(typeof (sandbox.stockCar.year), 'number', 'sandbox.year is a number');
    t.equals((sandbox.stockCar.year) <= 2015 && (sandbox.stockCar.year) >= 2000, true, 'stockCar.year is a number between 2000 and less than 2016');


    t.end();
  });

  suite.end()
})