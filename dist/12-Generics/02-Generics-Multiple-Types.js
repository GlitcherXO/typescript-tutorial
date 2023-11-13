"use strict";
/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/
// Generic Function `returnTypeEx`
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100)); // Returns: 100 (number)
console.log(returnTypeEx("Elzero")); // Returns: "Elzero" (string)
// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100)); // Returns: 100 (number)
console.log(returnTypeArrowSyntax("Elzero")); // Returns: "Elzero" (string)
// Generic Function `testType`
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType(100));
// Returns: "The Value Is 100 And Type Is number"
console.log(testType("Elzero"));
// Returns: "The Value Is Elzero And Type Is string"
// Generic Function `multipleTypes`
function multipleTypes(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
console.log(multipleTypes("Osama", 100));
// Returns: "The First Value Is Osama And Second Value 100"
console.log(multipleTypes("Elzero", true));
// Returns: "The First Value Is Elzero And Second Value true"
//# sourceMappingURL=02-Generics-Multiple-Types.js.map