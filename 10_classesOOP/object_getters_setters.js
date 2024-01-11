
const User = {
  _name: 'vidya',
  _email: 'vidya@gmail',

  get name ()
  {
    return this._name.toUpperCase();
  },
  set name ( value )
  {
    this._name = value;
  }
};

const newUser = Object.create( User );
console.log( newUser.name );