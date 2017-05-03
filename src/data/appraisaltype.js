export default class {
    constructor (type, cost, turnTime, region) {
       this.type = type;
       this.cost = cost;
       this.turnTime = turnTime;
       this.region = region; 
       this.active= true;
    }
    get type(){return this._type;}

    get cost(){return this._cost;}

    get turnTime(){ return this._turnTime;}

    get region(){ return this._region;}

    set type(type){this._type = type;}

    set cost(cost){this._cost = cost;}

    set turnTime(turnTime){this._turnTime = turnTime;}

    set region(region){this._region = region;}
};