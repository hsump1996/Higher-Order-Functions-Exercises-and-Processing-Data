/**
 * hoffy.js
 * write and export higher order functions below
 */

const c = {

    //Assume that an empty Array or Array of Number s is passed in; No need to check types
    makeSet: function(num1, ...numn) {

        const array = [num1, ...numn];

        const set = new Set(array);


        return Array.from(set);

    }


    ,findIndex(arr, num, compareFunc) {

        //  findIndex([1, 2, 4, 3, 5], 2, (a, b) => a === b); // [1]
        // arr = [1,2,4,3,5]
        // num = 2

        const returnArray = [];

        arr.map((element, index) => 
        {if (compareFunc(num, element)) {
            returnArray.push(index);
        } });

        if (returnArray.length === 0) {
            returnArray.push(-1);
            return returnArray;
        } 

        return returnArray;

    }

    ,filterWith(fn) {

        return function(arr) {
            
            const newArray = [];
            arr.map((element) => 
            {if (fn(element)) {
            newArray.push(element);
            } });

            return newArray;

        };
    }

    ,intersection(arr1, arr2) {

        const set = new Set(arr1);

        const set2 = new Set(arr2);

        const arr3 = Array.from(set);

        const arr4 = Array.from(set2);

        const newArray = arr3.filter(element => arr4.includes(element));

        return newArray;

    }

    ,repeatCall(fn, n, arg) {
        
        if (n === 0) {
            return undefined;
        } else {
            fn(arg);
            this.repeatCall(fn, n-1, arg);
        }
    }

    ,constrainDecorator(fn, min, max) {

        return function(...args) {

            let result = fn(...args);

            if (result > max) {

                result = max;

            } else if (result < min) {
                
                result = min;
            }

            return result;
        };
    }

    ,limitCallsDecorator(fn, n) {

        let numberOfCalls = 0;

        return function(...args) {

            if (numberOfCalls < n) {
                numberOfCalls++;
                const result = fn(...args);
                return result;
            } else {
                return undefined;
            }
        };
    }


    ,compose(...fnN) {

        return function(arg) {

            return fnN.reduce( (accumulator, fn) => { return fn(accumulator);}, arg);

        };
    }
};
module.exports = c;

