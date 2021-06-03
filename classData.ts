import {Fight} from "./classFight"
import {Slave} from "./classSlave"

let armor1:number = 50;
let damage1:number = 15;
let health1:number = 100;
let name1:string = "Jim";

let armor2:number = 30;
let damage2:number = 7;
let health2:number = 100;
let name2:string = "Stan";

let slave1 = new Slave(armor1, damage1, health1, name1);
let slave2 = new Slave(armor2, damage2, health2, name2);
slave1.getGreeting();
slave2.getGreeting();
new Fight(slave1, slave2).start();