"use strict";
/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/
class Labrador {
    constructor() {
        this.type = "dog";
    }
    bark() {
        console.log("Woof!");
    }
}
const labrador = {
    type: "monkey",
    bark() {
        console.log("Woof!");
    },
};
const myCar = {
    brand: "Toyota",
    model: "Camry",
};
//# sourceMappingURL=05-Interface-VS-Type-Aliases.js.map