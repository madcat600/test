import {Fight} from "./classFight"
import {Slave} from "./classSlave"

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let armor1:number = getRandomInt(0, 100);
let damage1:number = getRandomInt(0, 20);
let health1:number = 100;
let name1:string = "Jim";

let armor2:number = getRandomInt(0, 100);
let damage2:number = getRandomInt(0, 20);
let health2:number = 100;
let name2:string = "Stan";

let slave1 = new Slave(armor1, damage1, health1, name1);
let slave2 = new Slave(armor2, damage2, health2, name2);
//setTimeout(slave1.getGreeting, 500);
slave1.getGreeting();
slave2.getGreeting();
new Fight(slave1, slave2).start();