// static :- when  we don't want some property or methods to access the instances of the class

class User
{
  constructor( userName )
  {
    this.userName = userName;
  }
  static getUserId ()
  {
    return `123`;
  }
};

const carUser = new User( "Maruthi" );
//console.log( carUser.getUserId() ); // carUser.getUserId is not a function

class Car extends User
{
  constructor( userName, price )
  {
    super( userName );
    this.price = price;
  }
}

const car1 = new Car( "Toyoto", "100k" );
console.log( car1.getUserId() );