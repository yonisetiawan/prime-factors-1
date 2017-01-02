"use strict";

// release 0
let prime_factors = (angka, hasil = []) => {
  // write your code here
  var prime = [2,3,5,7,11]
  for (var i = 0; i < prime.length; i++){
    if (angka % prime[i] == 0){
      angka /= prime[i]
      hasil.push(prime[i])
      i--
    }
  }
  return hasil
}

console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let simple_recursive = (number) => {
  // write your code here
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
