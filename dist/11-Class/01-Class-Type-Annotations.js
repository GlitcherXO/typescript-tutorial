"use strict";
/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/
class Product {
    constructor(id, name, price) {
        // Constructor parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Method type annotations
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
// Create an instance of the Product class
const product1 = new Product(1, "Widget", 20.0);
// Access class properties and call a method
console.log(product1.getProductInfo()); // Output: ID: 1, Name: Widget, Price: $20
//# sourceMappingURL=01-Class-Type-Annotations.js.map