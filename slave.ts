import {Human} from "./human";

export class Slave extends Human {

    constructor(public armor:number, public damage:number, public health:number, public name:string){
        super();
    }

    getArmor(){
        return this.armor;
    }

    getDamage(){
        return this.damage;
    }

    getHealth(){
        return this.health;
    }

    getName(){
        return this.name;
    }

    setArmor(armor:number){
        this.armor = armor;
    }

    setDamage(damage:number){
        this.damage = damage;;
    }

    setHealth(health:number){
        this.health = health;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    hit(slave: Slave) {
        var areaHit = this.getRandomInt(0, 5);
        if (areaHit == 1) {
            slave.setHealth((slave.getHealth()-this.damage * 0.5));
            console.log(slave.getName() + " was kicked by " + this.name + " in hand. His health now is: " + slave.getHealth());
            return;
        }
        else if (areaHit == 2) {
            slave.setHealth(slave.getHealth()-this.damage);
            console.log(slave.getName() + " was kicked by " + this.name + " in body. His health now is: " + slave.getHealth());
            return;
        }

        else if (areaHit == 3) { 
            slave.setHealth((slave.getHealth()-this.damage * 0.5));
            console.log(slave.getName() + " was kicked by " + this.name + " in leg. His health now is: " + slave.getHealth());
            return;
        }
        
        else if (areaHit == 4) {
            slave.setHealth((slave.getHealth()-this.damage * 2));
            console.log(slave.getName() + " was kicked by " + this.name + " in head. His health now is: " + slave.getHealth());
            return;
        }

        else {
            console.log(slave.getName() + " was kicked by " + this.name + " but missed. His health now is: " + slave.getHealth());
            return;
        }

    }

    getGreeting(){
        console.log("Successfully created Slave. His name is " + this.name + ", his points is - Armor: " + this.armor + ", Damage: " + this.damage + ", Health: " + this.health + ".");
    }
}