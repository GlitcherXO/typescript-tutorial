"use strict";
/******************
 * GENERICS INTRO *
 ******************/
// A generic function that returns the input value as is
function returnType(val) {
    return val;
}
// Usage of the generic function with different types
const numValue = returnType(100);
const strValue = returnType("Elzero");
const boolValue = returnType(true);
const arrValue = returnType([1, 2, 3, 4]);
console.log(`Number Value: ${numValue}`);
console.log(`String Value: ${strValue}`);
console.log(`Boolean Value: ${boolValue}`);
console.log(`Array Value: ${arrValue}`);
//# sourceMappingURL=01-Generics-Intro.js.map