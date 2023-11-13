"use strict";
/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/
class MyClassPublic {
    constructor(name) {
        this.name = name;
    }
}
const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property
class MyClassPrivate {
    constructor(secret) {
        this.secret = secret;
    }
    revealSecret() {
        console.log(this.secret); // Accessing the private property from within the class
    }
}
const instancePrivate = new MyClassPrivate("My secret");
// console.log(instance.secret); // This would result in an error because secret is private
instancePrivate.revealSecret(); // This is a valid way to access the private property
class Parent {
    constructor(name) {
        this.familyName = name;
    }
}
class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}
const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");
// console.log(parent.familyName); // This would result in an error because familyName is protected
childEx.introduceFamily(); // This is a valid way to access the protected property
//# sourceMappingURL=02-Class-Access-Modifiers.js.map