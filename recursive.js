"use strict";

// // release 0
// let prime_factors = (angka, hasil = []) => {
//   // write your code here
//
// }
//
// console.log(prime_factors(3)); // [3]
// console.log(prime_factors(6)); // [2,3]
// console.log(prime_factors(8)); // [2,2,2]
// console.log(prime_factors(25)); // [5,5]
// console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let simple_recursive = (number) => {
  // write your code here
  if (number > 100){
    return 1;
  }else{
    number = number.toString()
    number = number.split("");
    var numberbaru = number[0]*number[1]
    console.log(numberbaru);
  }
  return simple_recursive(Number(numberbaru));
}

console.log(simple_recursive(39)); // 4
// console.log(simple_recursive(999)); // 2
// console.log(simple_recursive(3)); // 3
