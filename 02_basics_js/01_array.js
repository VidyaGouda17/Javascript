/* array  
"Is the collection of the same and different types of variables or we can store the single or multilpe varibale in the single varibale"
*/
//we can define the array as follows
let heros = ["x", "y" , 1, 2, true];
let heroin = new Array('a', 'b');

let myarray = [1, 2, 3, 4,5];

// console.log(myarray.indexOf(3));// 2
// console.log(myarray[4]);// 5

// push :- to add the element at the last index in the array ;
// myarray.push(9);
// console.log(myarray);// [1, 2, 3, 4,5, 9];

// push :- to remove the element at the last index in the array ;
// myarray.pop();
// console.log(myarray);// [1, 2, 3, 4,5];

/* unshift :- add the element at the 0th index of the array 
Note : Not prefred because it will change the index of the rest of the elemetns in the array 
*/
myarray.unshift(9);
//console.log(myarray);// [9, 1, 2, 3, 4,5];

/*
shift: - to remove the element at the oth index in the array 
*/

myarray.shift(9);
//console.log(myarray);// [1, 2, 3, 4,5];

/**
 * slice :- this method returns the shallow copy of the array of new the obejct of array with specified start and end index
 * end index, end index not included 
 * it will not change the original array data 
 */
 let myarray2  = [0, 1, 2, 3, 4,5 ];
 console.log("a", myarray2);
// slice 
 let newarr = myarray2.slice(1,4);
 console.log(newarr);
 console.log("b", myarray2);
 
 /* splice() :-  splice(start, deleteCount, item1) 
 * it will change the original array elements based on the specified data 
 */
 let newarr2 = myarray2.splice(1,4);
 console.log(newarr2);
 console.log("c", myarray2);
