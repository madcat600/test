"use strict";
exports.__esModule = true;
exports.Fight = void 0;
var Fight = /** @class */ (function () {
    function Fight(unit1, unit2) {
        this.unit1 = unit1;
        this.unit2 = unit2;
    }
    Fight.prototype.start = function () {
        var round = 1;
        do {
            console.log("round #" + round);
            round++;
            this.unit1.hit(this.unit2);
            this.unit2.hit(this.unit1);
        } while (this.unit1.getHealth() > 0 && this.unit2.getHealth() > 0);
        var winnerName = (this.unit1.getHealth() <= 0) ? this.unit2.getName() : this.unit1.getName();
        console.info(winnerName + " knocked down his enemy and he is a Winner!!!");
    };
    return Fight;
}());
exports.Fight = Fight;
