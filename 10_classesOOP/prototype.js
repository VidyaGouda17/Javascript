
let names = [ "vidya", "deepak" ];
let namesObj = {
  name: 'xyz'
};

// to add the custom property to an Object 
Object.prototype.lastName = 'Gouda';
// console.log( names.lastName );
// to add the custom function to an global Object

Object.prototype.sayHello = function ()
{
  // console.log( `Say hello to all` );
};

names.sayHello();
namesObj.sayHello();

// if you want to a property or function to an Array
Array.prototype.newMethod = function ()
{
  return this[ this.length + 1 ] = "last Element";
};
names.newMethod();

// console.log( names );

// if you want to a property or function to an Object
// namesObj.prototype.newMethod = function ()
// {
//   console.log( `say hello to an ${ this.name }` );
// };
// namesObj.newMethod(); // get an error because we can add the custom method to an function constructor of an object

// inheritence

let User = {
  name: 'Vidya'
};

let Teacher = {
  name: 'Xyz',
  email: 'xyz@nonstopio.com'
};

let TechSupport = {
  isAvailable: false,
  __proto__: Teacher
};

// to inherit the property of the Teacher into the TeachSupport object
TechSupport.__proto__ = Teacher;

// console.log( Teacher );

// Modern sytax
// Sets the prototype of a specified object o to object proto or null. Returns the object o
Object.setPrototypeOf( TechSupport, Teacher );
console.log( TechSupport );

// we can add the custom property to an extisting in String object

let myName = "Vidya         ";
String.prototype.trueLength = function ()
{
  console.log( `${ this }` );
  return this.trim().length;
};


console.log( myName.trueLength() );
console.log( "deepakV".trueLength() );
