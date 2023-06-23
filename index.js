"use strict";

function createCountr() {
    let counter = 0;

    const myFunction = function(sum) {
        counter += sum;
        return counter;
    }
    return myFunction;
}

const increment = createCountr();
console.log(increment(3));
console.log(increment(5));
console.log(increment(20));