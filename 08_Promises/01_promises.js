// create a promise 
const promiseOne = new Promise( ( resolve, reject ) =>
{
  // do the async operation like calling a API , db connections etc
  setTimeout( () =>
  {
    console.log( "Async 1 operation completed" );
    // to connect the then and promise we need to call resolve()
    resolve();
  }, 1000 );
} );

//consume the promise
promiseOne.then( () =>
{
  console.log( "Promise 1 executed suscussefuly." );
} ).catch( ( error ) =>
{
  console.log( "Promise 1 executed unSuscussefuly." );
} );

// we can create a promise like this also 
new Promise( ( resolve, reject ) =>
{
  setTimeout( () =>
  {
    console.log( "Async operation 2 completed" );
    // to 
    resolve();
  }, 1000 );
} ).then( () =>
{
  console.log( "Promise 2 executed suscussefuly." );
} ).catch( () =>
{
  console.log( "Promise  2 executed unSuscussefuly." );
} );

// create a promise and consume the promises and learn how to read the data from the resolve

const promiseTwo = new Promise( ( resolve, reject ) =>
{
  setTimeout( () =>
  {
    console.log( "Async operation 2" );
    resolve( {
      userName: 'Vidya',
      role: 'Software Developer',
      company: 'Nonstopio Technologies'
    } );
  }, 1000 );
} );

promiseTwo.then( ( user ) =>
{
  console.log( "response", user );
} );


// lets learn when promise is rejected how to read the error
const promiseFour = new Promise( ( resolve, reject ) =>
{
  setTimeout( () =>
  {
    console.log( "Async operation 4" );
    let error = true;
    if ( !error )
    {
      resolve( {
        userName: 'Vidya',
        role: 'Software Developer',
        company: 'Nonstopio Technologies'
      } );
    } else
    {
      reject( "Error: Something went wrong" );
    }
  } );
}, 1000 );

promiseFour.then( ( user ) =>
{
  console.log( "response", user );
} ).catch( ( error ) =>
{
  console.log( "Caught an Error", error );
} );

// lets learn  promise chaining and finally block
const promiseFive = new Promise( ( resolve, reject ) =>
{
  setTimeout( () =>
  {
    console.log( "Async operation 5" );
    let error = false;
    if ( !error )
    {
      resolve( {
        userName: 'Vidya',
        role: 'Software Developer',
        company: 'Nonstopio Technologies'
      } );
    } else
    {
      reject( "Error: Something went wrong" );
    }
  } );
}, 1000 );

promiseFive.then( ( user ) =>
{
  return user?.userName;
} ).then( ( userName ) =>
{
  console.log( "User Name: ", userName );
} ).catch( ( error ) =>
{
  console.log( "Caught an Error", error );
} ).finally( () =>
{
  // this will execute either promise is resolved or rejected 
  console.log( "The promise is either resolve or rejected" );
} );

// the promise with async and wait 
const promiseSix = new Promise( ( resolve, reject ) =>
{
  setTimeout( () =>
  {
    console.log( "Async Operation 6" );
    let error = true;
    if ( !error )
    {
      resolve( {
        userName: 'Vidya',
        role: 'Software Developer',
        company: 'Nonstopio Technologies'
      } );
    } else
    {
      reject( "Error: Something went wrong" );
    }
  }, 1000 );
} );

const consumePromise = async () =>
{
  // try catch block is used to handle resolve and to catch the error   
  try
  {
    const response = await promiseSix;
    console.log( response, "response" );
  } catch ( error )
  {
    console.log( `Error: ${ error }` );
  }
};

consumePromise();

const getUsers = async () =>
{
  try
  {
    const response = await fetch( 'https://jsonplaceholder.typicode.com/users' );
    console.log( "response", response );
    const data = await response.json();
    console.log( 'data', data );
  } catch ( error )
  {
    console.log( `Error: ${ error }` );
  }
};
getUsers();

// promise all 
const promise1 = new Promise( ( resolve, reject ) =>
{
  setTimeout( () =>
  {
    resolve( {
      userName: 'Vidya',
      gender: 'female'
    } );
  }, 1000 );
} );
const promise2 = new Promise( ( resolve, reject ) =>
{
  setTimeout( () =>
  {
    let error = false;
    if ( !error )
    {
      resolve( {
        hobbies: [ 'reading', 'traveling' ]
      } );
    } else
    {
      reject( "promise two rejected" );
    }
  }, 2000 );
} );
const promise3 = new Promise( ( resolve, reject ) =>
{
  setTimeout( () =>
  {
    let error = false;
    if ( !error )
    {
      resolve( {
        role: 'developer',
        company: 'Nonstopio'
      } );
    } else
    {
      reject( "promise two rejected" );
    }
  }, 2000 );

} );

Promise.all( [ promise1, promise2, promise3 ] ).then( ( user ) =>
{
  console.log( user );
} ).catch( ( error ) =>
{
  console.log( `Error: ${ error }` );
} )

