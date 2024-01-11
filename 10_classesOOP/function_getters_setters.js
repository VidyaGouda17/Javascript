function User ( userName, email )
{
  this._userName = userName;
  this._email = email;

  Object.defineProperty( this, 'userName', {
    get: function ()
    {
      return this._userName.toUpperCase();
    },
    set: function ( value )
    {
      this._userName = value;
    }
  } );

  Object.defineProperty( this, 'email', {
    get: function ()
    {
      return this._email.toUpperCase();
    },
    set: function ( value )
    {
      this._email = value;
    }
  } );
}

const newUser = new User( "vidya", "vidya@gmail.com" );
console.log( newUser.email );// VIDYA@GMAIL.COM
console.log( newUser.userName );//VIDYA