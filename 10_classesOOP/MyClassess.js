
/// classes
//Note : Classes are the template for the creating the objects
//They encapsulate the data that to work on that data

class User
{
  constructor( username, email, password )
  {
    this.username = username;
    this.password = password;
    this.email = email;
  }
  encryptPassword ()
  {
    //code to encrypt the password
    return `this is the password ${ this.password }1234`;
  }
}

const user = new User( "Vidya", "vidya@google.com", "Vidya@1234" );

console.log( user.encryptPassword() );

// if we don't the classes then we can create this by function Constructor
function UserOne ( username, email, password )
{
  this.username = username;
  this.password = password;
  this.email = email;
}

UserOne.prototype.changeUserName = function ()
{
  console.log( `Changing the username ${ this.username.toLowerCase() }` );
};

const userOne = new UserOne( "Vidya", "vidya@google.com", "Vidya@1234" );
console.log( userOne.changeUserName() );
