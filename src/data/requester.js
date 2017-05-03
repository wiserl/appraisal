

export default class  {
      constructor( name, email, appraisals ){
    this.name = name;
    this.email = email;
    this.appraisals = appraisals;
    this.active= true;
  }
 get name(){return this._name;}

    get email(){return this._email;}

    get appraisals(){ return this._appraisals;}

   set name(name){this._name = name;}

    set email(email){this._email = email;}

    set appraisals (appraisals){this._appraisals = appraisals;}




};