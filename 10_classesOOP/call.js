// what is use of the call
// call method is used to pass the current execution context to an other object ie this

// here we are just calling the function inside the user when the
// execution context of the SetUserName is done the reference will remove and we are not storing the ref in any where
// function SetUserName ( userName )
// {
//   this.userName = userName;
// }

// function User ( userName, email, age )
// {
//   SetUserName( userName );
//   this.email = email;
//   this.age = age;
// }

// const user = new User( "Vidya", "vidya@google.com", 27 );
// console.log( user ); // { email: 'vidya@google.com', age: 27}


// use the call() => to hold the reference will use the call();

function SetUserName ( userName )
{
  this.userName = userName;
}
function User ( userName, email, age )
{
  SetUserName.call( userName );
  this.email = email;
  this.age = age;
}

const user = new User( "Vidya", "vidya@gmai.com", 28 );
// console.log( user ); // { email: 'vidya@google.com', age: 27}

// use the call() => to hold the reference will use the call() and we need the values return from the object 
// please use the this of the Mine dont use this of yours 

function SetUserName ( userName )
{
  this.userName = userName;
}
function User ( userName, email, age )
{
  SetUserName.call( this, userName );
  this.email = email;
  this.age = age;
}

const user1 = new User( "Vidya", "vidya@gmai.com", 28 );
console.log( user1 ); // { email: 'vidya@google.com', age: 27}
