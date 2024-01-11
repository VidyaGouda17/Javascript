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