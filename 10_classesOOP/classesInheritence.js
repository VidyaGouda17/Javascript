
class User
{
  constructor( userName )
  {
    this.userName = userName;
  }
  logMe ()
  {
    console.log( `this is my Name ${ this.userName }` );
  }
}

class Teacher extends User
{
  constructor( userName, email, password, course )
  {
    super( userName );
    this.email = email;
    this.password = password;
    this.course = course;
  }

  addCourse ()
  {
    console.log( `this is my new Course ${ this.course }` );
  }
}

const chai = new Teacher( "Vidya", "vidya@google.com", "Vidya@1234", "English" );
const masalaCourse = new User( "Xyz" );

chai.addCourse();// this is my new Course English
//masalaCourse.addCourse(); // error 
chai.logMe();// this is my Name Vidya
masalaCourse.logMe();// this is my Name Xyz

console.log( chai === masalaCourse );// false
console.log( chai === Teacher );// false , because the instance is different
console.log( chai instanceof Teacher );// true
console.log( Teacher instanceof User );// false




