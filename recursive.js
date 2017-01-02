"use strict";

// release 0
let prime_factors = (angka, hasil = []) => {
  // write your code here
  var i = 2;
  var x = 1;
  while(i < angka) {
    if (angka % i === 0) {
      hasil.push(i);
      angka = angka / i
    } else {
      i = i + x;
      x = 2
    }
  }
  hasil.push(i)
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
  if (number >= 100) {
    var numSplit = number.toString().split('')
    var hasil = numSplit[0]*numSplit[1]*numSplit[2]
    return simple_recursive(hasil)
  } else if(number >=10){
    var numSplit = number.toString().split('')
    var hasil = numSplit[0]*numSplit[1]
    return simple_recursive(hasil)
  } else {
    return number;
  }
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
