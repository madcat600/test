import {Slave} from "./classSlave"

export class Fight{


    constructor(public unit1:Slave, public unit2:Slave){
    }

    start() {
        let round = 1;

        do {
            console.log(`round #${round}`);
            round++;
            this.unit1.hit(this.unit2);
            this.unit2.hit(this.unit1);
        } while(this.unit1.getHealth() > 0 && this.unit2.getHealth() > 0)
    
        let winnerName = (this.unit1.getHealth() <= 0) ? this.unit2.getName() : this.unit1.getName();
        console.info(`${winnerName} knocked down his enemy and he is a Winner!!!`);
    }

}

