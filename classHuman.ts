export class Human{

    head:number | undefined = 1;
    hand:number | undefined = 2;
    leg:number | undefined = 2;

    constructor(head?:number, hand?:number, leg?:number){
        this.head = head;
        this.hand = hand;
        this.leg = leg;
    }

    getGreeting(){
        console.log("Successfully created Human.")
    }
}
