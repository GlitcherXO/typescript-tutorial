"use strict";
/***************************
 * GENERICS AND INTERFACES *
 ***************************/
// Generic Class `Collection`
class Collection {
    constructor() {
        this.data = [];
    }
    // Method to add an item of type `T` to the collection
    add(item) {
        this.data.push(item);
    }
}
// Creating an instance of `Collection` with type parameter `Book`
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
// Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);
//# sourceMappingURL=04-Generics-And-Interfaces.js.map