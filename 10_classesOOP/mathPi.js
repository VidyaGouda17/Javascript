// can we change the value of the Math.PI

console.log( Math.PI );

//Gets the own property descriptor of the specified object. An own property descriptor is one that is
// defined directly on the object and is not inherited from the object's prototype.;
const newPi = Object.getOwnPropertyDescriptor( Math, 'PI' );
Object.defineProperty( Math, "PI", {
  writable: true
} );
Math.PI = 3;
console.log( Math.PI, "Changed" ); //  Cannot redefine property: PI
console.log( newPi );
// {
//   value: 3.141592653589793,
//     writable: false,
//       enumerable: false,
//         configurable: false;
// }

const user = {
  name: 'Vidya',
  email: 'vidya@gmail.com',
  loggedIm: true
};
console.log( user );
Object.defineProperty( user, "name", {
  writable: true,
  enumerable: false,
  configurable: true
} );

const descriptor = Object.getOwnPropertyDescriptor( user, 'name' );
console.log( descriptor );
for ( const [ key, value ] of Object.entries( user ) )
{
  console.log( `the ${ key } of the ${ value }` );
  //the email of the vidya@gmail.com
  //the loggedIm of the true;
}



