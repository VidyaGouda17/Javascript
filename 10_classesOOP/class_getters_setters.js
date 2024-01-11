class User
{
  constructor( name, password )
  {
    this.name = name;
    this._password = password;
  }

  get password ()
  {
    return `my password is ${ this._password + 'abc' }`;
  }
  set password ( value )
  {
    this._password = value;
  }
}

const newUser = new User( "vidya", "vidya@1234" );

console.log( newUser.password );