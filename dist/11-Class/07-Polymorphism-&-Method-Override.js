"use strict";
/**********************************
 * POLYMORPHISM & METHOD OVERRIDE *
 **********************************/
// Define an abstract class
class AbstractEntity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    } // Change 'private' to 'protected'
    static generateNextId() {
        return AbstractEntity.nextId++;
    }
}
AbstractEntity.nextId = 1;
// Create a concrete subclass
class Entity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
// Create another concrete subclass
class AnotherEntity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
}
// Generate unique IDs for entities using the static method
const entity1 = new Entity(AbstractEntity.generateNextId(), "Widget");
const entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");
// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...
//# sourceMappingURL=07-Polymorphism-&-Method-Override.js.map