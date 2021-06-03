"use strict";
exports.__esModule = true;
exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human(head, hand, leg) {
        this.head = 1;
        this.hand = 2;
        this.leg = 2;
        this.head = head;
        this.hand = hand;
        this.leg = leg;
    }
    Human.prototype.getGreeting = function () {
        console.log("Successfully created Human.");
    };
    return Human;
}());
exports.Human = Human;
