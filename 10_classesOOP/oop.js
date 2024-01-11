const user = {
  name: 'vidya',
  sayHello: function ()
  {
    console.log( `My name is ${ this.name }` );
  }
};
// console.log( user.name ); // My name is vidya
// console.log( user.sayHello() );


function User ( userName, loggedIn )
{
  this.userName = userName;
  this.loggedIn = loggedIn;

  return this;
}

const userOne = User( 'vidya', false );
const userTwo = User( 'Gouda', true );

const one = new User( 'dsgd', true );
const two = new User( 'xyz', false );
console.log( one );
console.log( one.constructor );// [Function: User]
let xyz;
console.log( xyz instanceof User );// [Function: User]

