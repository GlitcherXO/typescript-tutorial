"use strict";
/********************************
 * ABSTRACT CLASSES AND MEMBERS *
 ********************************/
class AbstractItem {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static generateNextId() {
        return AbstractItem.nextId++;
    }
}
AbstractItem.nextId = 1;
class Item extends AbstractItem {
    constructor(id, name) {
        super(id, name);
    }
    getItemInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
const item1 = new Item(AbstractItem.generateNextId(), "Widget");
const item2 = new Item(AbstractItem.generateNextId(), "Gadget");
console.log(item1.getItemInfo()); // ID: 1, Name: Widget
console.log(item2.getItemInfo()); // ID: 2, Name: Gadget
//# sourceMappingURL=06-Abstract-Classes-And-Members.js.map