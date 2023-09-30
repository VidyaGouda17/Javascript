const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

/**
 * Push :- this method will add the elements at the end of the array and returns the new lenght of the original array
 */
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);// ["thor", "Ironman", "spiderman" , ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]);// superman

/**
 * Concat:- this method is used to merge two or more array , but this method will not change the extisting array but returns the new array 
 */
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);//["thor", "Ironman", "spiderman" ,"superman", "flash", "batman"]

/**
 * spread operator : - This is used to merge multiple array and it will spread the each element of the array and combine it and give the new array 
 */
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);//["thor", "Ironman", "spiderman" ,"superman", "flash", "batman"]

/**
 * flat:- The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

/*
 * from:- It will create new array , shallow copies of the instances from the iterable from the givine input
 */

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))// ['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({name: "hitesh"})) // interesting

/**
 * of:- The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
 */
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));