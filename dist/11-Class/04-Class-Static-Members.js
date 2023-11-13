"use strict";
/************************
 * CLASS STATIC MEMBERS *
 ************************/
class ProductStaticMembers {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return ProductStaticMembers.nextId++;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
// 'private' property
ProductStaticMembers.nextId = 1;
// Generate unique IDs for products using the static method
const product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
const product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget
//# sourceMappingURL=04-Class-Static-Members.js.map