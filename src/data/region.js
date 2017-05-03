export default class  {
    constructor(name, turnTime, cost) {
        this.name = name;
        this.turnTime = turnTime;
        this.cost = cost;
        this.active= true;
    }

 get name(){return this._name;}

    get turnTime(){return this._turnTime;}

    get cost(){ return this._cost;}

   set name(name){this._name = name;}

    set turnTime(turnTime){this._turnTime = turnTime;}

    set cost(cost){this._cost = cost;}

   
};




