/*
    # Plain object and adding properties
        Declare a variable named `plainBox` and set its value to be an empty object.
        Next, you will add three properties to this object. Each property declaration expression will be on its own line and ending with semicolons (`;`). This is just one way of adding properties to an object.
            - Add a property named `color` and set it the name of any color.
            - Add a property named `size` and set it to a number value between `0` and `20`.
            - Add a property named `contents` and set it to be an empty array.
 */


/*
    # An object with properties declared line by line

        Declare a variable named `stockCar` and set its value to be an
        object with its key-value pairs separated by commas (`,`).
        This is a way of declaring a new object and also being able
        to add property names and values at the moment an object
        is created.
            - add a key named `model` and set its value to the name of an American car manufacturer.
            - add a key named `year` and set it to be a value above 2000 but below 2016.
            - add a key named `automaticTransmission` and give it a Boolean value of your choice.
            - add a key named `driver` and set it to be `null`.
            - add a key named `passengers` and set it to be an empty array.
 */


/*
    Add new property inside a function

        Declare a variable named `plainPerson`. Set its value to be an empty object with no properties.

        Next, declare a function named `buildPerson` and then define three parameters. The first parameter will be named `person` and the second will be `nameString` and the third will be `age`. Within this function you will modify the `person` object by:
            - adding a property called `name` and set its value to be the second parameter.
            - adding a property called `age` and set its value to be the third parameter.

        The function will return the first parameter.

        Finally, invoke your new function while passing in the `plainPerson` object and additional agrument values, then store the return value in a variable named `completePerson`. Use `console.log` three times to print the entire object, just the value at `name`, and just the value at `age`.
 */


/*
    # Display values of objects that are inside an array
        Declare a new variable named `arrayOfObjects` and set it to be [this array of objects](https://gist.github.com/sgnl/958adf99007329d2e4ff).

        Declare a new function named `printProcessedOrders`and set one parameter called `orders`. Within this function you will return a string that prints the order details to the page in the following format.

        Example output:
            =====
            id:  0
            purchase date:  Monday Jan 25 2015 2:01 PM
            purchase total:  279.38
            =====
            id:  1
            purchase date:  Monday Jan 27 2015 11:31 AM
            purchase total:  79.80
            =====
            id:  2
            purchase date:  Monday Feb 1 2015 7:56 AM
            purchase total:  15.62
            =====
            ...
 */


/*
    # Addition with an object
        Declare a new variable named sumObj and set it to be a new object with the properties `a`, `b`, and `result`. Properties 'a' and 'b' will be set to a number and result will be 'undefined.'

        Declare a new function named objectAddition. Declare the first parameter, which will be an object. Within this function, you will access the values stored `a` and `b` of the object being passed in. Add the these values and store the sum to this object's `result` property. This function will return the object.

        Invoke your function and pass in your object, store the result to a variable named sumObjResult and use `console.log` to inspect your results.

        Go ahead and create some more objects and pass them to this function. Have fun with it.
*/


/*
    # Print sum function and add as new key-value
        Declare a new function named printObj and a single parameter which will be the object from the challenge just above. Within this function you are to print to the screen a message of the operation performed. For Example:

        // if this object was passed into your function:
        { a: 10, b:67, result: 77 }
        // it should print a message saying
        '10 + 67 = 77'

        Before returning this object, add a new property to it named `output` and set it to be the message that was printed out.

        Invoke this function and pass in your object. Further test by changing the values of the object being passed in or **create more** objects and invoke your function multiple times.
 */


/*
    # Putting stuff in `plainBox`
        Declare a function named putInPlainBox and a single parameter which will be an object. Within this function, write a FOR loop that adds **10** random number values to the array referenced at the `contents` property of the object being passed in. This function will return the object.

        Invoke your function and pass in your object (which should be `plainBox`), store the result to a variable named plainBoxResult and use `console.log` to inspect your results.
 */


/*
    # Detecting transmission
        Declare a function named detectingTranmission and a single parameter which will be an object. Within this function you will check to see if the car has an automatic or manual transmission and print the results on screen.

        If `automaticTransmission` is true then print a message saying so. Also, provide an appropriate message for when the its false.

        Invoke your function and pass in your stockCar object, store the result to a variable named isAutomaticTransmission and use `console.log` to inspect your results.
 */


/*
    # Who's driving this thing?!
        As you may have noticed that the `stockCar` doesn't have a driver!

        Declare a function named addDriver with two parameters. The first parameter will be an object with represents a **car**, the other will be a **person**. Within this function, set the `driver` value of the **stockCar** to the second parameter being passed into your function.

        Invoke your function and pass in your objects, store the result to a variable named stockCarWithDriver, and inspect your results. Consider using `plainPerson` as your driver.
 */


/*
    # Final Boss
    The Dev League instructors want to ride your whip!

        Declare a variable named `passengerList` and set it to be `['Jon', 'Jason', 'Tony', 'Joe', 'Jesse', 'Nigel', 'Kelli', 'Marifel', 'Victor']`

        Declare a variable named `passengerAges` and set it to be `[19, 12, 21, 22, 16, 9, 19, 20, 15]`

        Declare a function named `addPassengers` with three parameters. The first will be a **car** and the second will be an array of **names** and the third will be an array of **ages**. The names and ages are in sequence, e.g. "Jon" is "19", "Jason" is "12".

        In the end you will return the **car** but within the function...

        You will have to populate the `passengers` array on the **car** object with proper objects that represent a person. Currently you have two arrays, one which contains names and another which contains ages.

        You should iterate through the names and ages, pass the values to your `buildPerson` function to build person objects (remember that this function returns a new object). Don't forget that this function actually takes **three** arguments, how will you handle that? (you should not have to change your function).

    Example of a loaded Car:

    # Display passengers
        Delcare a function named `displayPassengers` and set one parameter which will be a **car**. This function should print out each passenger's name and age one line at a time.

    example output:
        'Jon, age 19, is riding dirty!'
        'Jason, age 12, is riding dirty!'
        'Tony, age 21, is riding dirty!'
        'Joe, age 22, is riding dirty!'
        'Jesse, age 16, is riding dirty!'
        'Nigel, age 9, is riding dirty!'
        'Kelli, age 19, is riding dirty!'
        'Marifel, age 19, is riding dirty!'
        'Victor, age 19, is riding dirty!'
 */

