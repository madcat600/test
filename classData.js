"use strict";
exports.__esModule = true;
var classFight_1 = require("./classFight");
var classSlave_1 = require("./classSlave");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
var armor1 = getRandomInt(0, 100);
var damage1 = getRandomInt(0, 20);
var health1 = 100;
var name1 = "Jim";
var armor2 = getRandomInt(0, 100);
var damage2 = getRandomInt(0, 20);
var health2 = 100;
var name2 = "Stan";
var slave1 = new classSlave_1.Slave(armor1, damage1, health1, name1);
var slave2 = new classSlave_1.Slave(armor2, damage2, health2, name2);
//setTimeout(slave1.getGreeting, 500);
slave1.getGreeting();
slave2.getGreeting();
new classFight_1.Fight(slave1, slave2).start();
