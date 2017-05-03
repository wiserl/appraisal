export default class {
constructor( id, email, type, start, end, address){
     this.id= id;
     this.email = email;
     this.type = type;
     this.start = start;
     this.end = end;
     this.address = address;
     this.active= true;
   }
get id() { return this._id;}
 
 get email(){return this._email;}

    get type(){return this._type;}

    get start(){ return this._start;}

    get end(){ return this._end;}
    get address() {return this._address;}
  
  set id(id) {this._id = id;}
   set email(email){this._email = email;}

    set type(type){this._type = type;}

    set start (start){this._start = start;}

     set end (end){this._end = end;}

      set address (address){this._address = address;}
   
};