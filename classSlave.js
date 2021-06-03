"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Slave = void 0;
var classHuman_1 = require("./classHuman");
var Slave = /** @class */ (function (_super) {
    __extends(Slave, _super);
    function Slave(armor, damage, health, name) {
        var _this = _super.call(this) || this;
        _this.armor = armor;
        _this.damage = damage;
        _this.health = health;
        _this.name = name;
        return _this;
    }
    Slave.prototype.getArmor = function () {
        return this.armor;
    };
    Slave.prototype.getDamage = function () {
        return this.damage;
    };
    Slave.prototype.getHealth = function () {
        return this.health;
    };
    Slave.prototype.getName = function () {
        return this.name;
    };
    Slave.prototype.setArmor = function (armor) {
        this.armor = armor;
    };
    Slave.prototype.setDamage = function (damage) {
        this.damage = damage;
        ;
    };
    Slave.prototype.setHealth = function (health) {
        this.health = health;
    };
    Slave.prototype.hit = function (slave) {
        slave.setHealth(slave.getHealth() - this.damage);
        console.log(slave.getName() + " was kicked by " + this.name + ". His health now is: " + slave.getHealth());
    };
    Slave.prototype.getGreeting = function () {
        console.log("Successfully created Slave. His name is " + this.name + ", his points is - Armor: " + this.armor + ", Damage: " + this.damage + ", Health: " + this.health + ".");
    };
    return Slave;
}(classHuman_1.Human));
exports.Slave = Slave;
