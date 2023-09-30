/**
 * Global scope
 */
//var c = 300
let a = 300
if (true) {
    /**
     * block scope
     */
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

/**
 * closure :  the funtion inside the other funtion has the access for the all the properties define in the main funtion 
 */
function one(){
    let username ="vidya";
    function two(){
        let age = 25;
      //  console.log(username)
    }
  //  console.log(age)
    two()
}
one();

if(true){
    let username ="vidya";
    if(username ="vidya"){
        let age = 25;
        console.log(username)
    }
   // console.log(age)
}

// ++++++++++++++++++ interesting ++++++++++++++++++

/**
 * hosting 
 */

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}