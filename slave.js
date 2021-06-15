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
var human_1 = require("./human");
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
    Slave.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Slave.prototype.hit = function (slave) {
        var areaHit = this.getRandomInt(0, 5);
        if (areaHit == 1) {
            slave.setHealth((slave.getHealth() - this.damage * 0.5));
            console.log(slave.getName() + " was kicked by " + this.name + " in hand. His health now is: " + slave.getHealth());
            return;
        }
        else if (areaHit == 2) {
            slave.setHealth(slave.getHealth() - this.damage);
            console.log(slave.getName() + " was kicked by " + this.name + " in body. His health now is: " + slave.getHealth());
            return;
        }
        else if (areaHit == 3) {
            slave.setHealth((slave.getHealth() - this.damage * 0.5));
            console.log(slave.getName() + " was kicked by " + this.name + " in leg. His health now is: " + slave.getHealth());
            return;
        }
        else if (areaHit == 4) {
            slave.setHealth((slave.getHealth() - this.damage * 2));
            console.log(slave.getName() + " was kicked by " + this.name + " in head. His health now is: " + slave.getHealth());
            return;
        }
        else {
            console.log(slave.getName() + " was kicked by " + this.name + " but missed. His health now is: " + slave.getHealth());
            return;
        }
    };
    Slave.prototype.getGreeting = function () {
        console.log("Successfully created Slave. His name is " + this.name + ", his points is - Armor: " + this.armor + ", Damage: " + this.damage + ", Health: " + this.health + ".");
    };
    return Slave;
}(human_1.Human));
exports.Slave = Slave;
