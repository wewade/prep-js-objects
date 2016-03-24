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

Test('prep-js-objects', suite => {
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
    t.equals(typeof (sandbox.stockCar.year), 'number', 'stockCar.year is a number');
    t.equals((sandbox.stockCar.year) <= 2015 && (sandbox.stockCar.year) >= 2000, true, 'stockCar.year is a number between 2000 and less than 2016');
    t.equals(typeof (sandbox.stockCar.automaticTransmission), 'boolean', 'stockCar.automaticTransmission is a boolean');
    t.equals(Array.isArray(sandbox.stockCar.passengers), true, 'stockCar.passengers is an array');
    t.deepEqual(sandbox.stockCar.passengers, [], 'stockCar.passengers is an empty array');
    t.end();
  });

  Test('Add new property inside a function', t => {
    t.ok(sandbox.plainPerson, 'plainPerson variable exists.');
    t.equals(typeof (sandbox.plainPerson), 'object', 'plainPerson variable is an object.');
    if (!sandbox.buildPerson) {
      t.fail('buildPerson function is not defined.');
      return t.end();
    }
    t.notEquals(sandbox.buildPerson, void 0, 'buildPerson function exists.');
    t.deepEqual(sandbox.buildPerson(sandbox.plainPerson, 'Joe', 25), { name : 'Joe', age :25 }, 'buildPerson function returns a person.');
    t.equals(typeof (sandbox.buildPerson(sandbox.plainPerson, 'Joe', 25)), 'object', 'buildPerson function returns an object.');
    t.ok(sandbox.completePerson, 'completePerson variable exists.');
    t.equals(Object.keys(sandbox.completePerson).length, 2, 'Successfully saved the result of buildPerson to completePerson');
    t.end();
  });

  Test('Display values of objects that are inside an array', t => {
    t.ok(sandbox.arrayOfObjects, 'arrayOfObjects variable exists.');
    t.equals(Array.isArray(sandbox.arrayOfObjects), true, 'arrayOfObjects is an array');
    t.deepEqual(sandbox.arrayOfObjects, [
  {
    id : 0,
    date : 'Monday Jan 25 2015 2:01 PM',
    total : '279.38'
  },
  {
    id : 1,
    date : 'Monday Jan 27 2015 11:31 AM',
    total : '79.80'
  },
  {
    id : 2,
    date : 'Monday Feb 1 2015 7:56 AM',
    total : '15.62'
  },
  {
    id : 3,
    date : 'Monday Feb 1 2015 9:43 AM',
    total : '19.83'
  },
  {
    id : 4,
    date : 'Monday Feb 1 2015 11:08 PM',
    total : '56.69'
  },
  {
    id : 5,
    date : 'Monday Feb 13 2015 10:22 AM',
    total : '137.92'
  },
  {
    id : 6,
    date : 'Monday Feb 14 2015 6:54 PM',
    total : '938.65'
  },
  {
    id : 7,
    date : 'Monday Feb 14 2015 7:17 PM',
    total : '43.77'
  },
  {
    id : 8,
    date : 'Monday Feb 14 2015 7:18 PM',
    total : '28.54'
  },
  {
    id : 9,
    date : 'Monday Feb 14 2015 7:18 PM',
    total : '194.33'
  }
], 'arrayOfObjects is an array');
    if (!sandbox.printProcessedOrders) {
      t.fail('printProcessedOrders function is not defined.');
      return t.end();
    }
    t.notEquals(sandbox.printProcessedOrders, void 0, 'printProcessedOrders function exists.');
    t.equals(typeof (sandbox.printProcessedOrders(sandbox.arrayOfObjects)), 'string', 'printProcessedOrders function returns a string.');
    t.equals(sandbox.printProcessedOrders(sandbox.arrayOfObjects),
        '===== id:  0 purchase date:  Monday Jan 25 2015 2:01 PM purchase total:  279.38 ===== id:  1 purchase date:  Monday Jan 27 2015 11:31 AM purchase total:  79.80 ===== id:  2 purchase date:  Monday Feb 1 2015 7:56 AM purchase total:  15.62 =====', 'printProcessedOrders function is successful');

    t.end();
  });

  Test('Addition with an object', t => {
    t.ok(sandbox.sumObj, 'sumObj variable exists.');
    t.equals(typeof (sandbox.sumObj), 'object', 'sumObj variable is an object.');
    t.equals(typeof (sandbox.sumObj.a), 'number', 'sumObj.a variable is an number.');
    t.equals(typeof (sandbox.sumObj.b), 'number', 'sumObj.b variable is an number.');
    if (!sandbox.objectAddition) {
      t.fail('objectAddition function is not defined.');
      return t.end();
    }
    t.notEquals(sandbox.objectAddition, void 0, 'objectAddition function exists.');
    t.deepEqual(sandbox.sumObj.result, sandbox.sumObj.a + sandbox.sumObj.b, 'objectAddition function returns the result of a + b.');
    t.equals(typeof (sandbox.objectAddition(sandbox.sumObj)), 'object', 'objectAddition function returns an object.');
    t.end();
  });

  /*
      # Print sum function and add as new key-value
          Declare a new function and a single parameter which will be the object from the challenge just above. Within this function you are to print to the screen a message of the operation performed. For Example:

          // if this object was passed into your function:
          { a: 10, b:67, result: 77 }
          // it should print a message saying
          '10 + 67 = 77'

          Before returning this object, add a new property to it named `output` and set it to be the message that was printed out.

          Invoke this function and pass in your object. Further test by changing the values of the object being passed in or **create more** objects and invoke your function multiple times.
   */

  suite.end()
})