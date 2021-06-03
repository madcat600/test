import {Human} from "./classHuman";

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

    hit(slave: Slave) {
        slave.setHealth(slave.getHealth()-this.damage);
        console.log(slave.getName() + " was kicked by " + this.name + ". His health now is: " + slave.getHealth());
    }

    getGreeting(){
        console.log("Successfully created Slave. His name is " + this.name + ", his points is - Armor: " + this.armor + ", Damage: " + this.damage + ", Health: " + this.health + ".");
    }
}