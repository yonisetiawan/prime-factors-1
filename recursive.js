"use strict";

let hasil = [];
let final = 0;

// release 0
let prime_factors = (angka, hasil = []) => {
  let i;
  for(i = 2; i < angka;){
    if(angka % i === 0){
      hasil.push(i);
      angka = angka / i;
    }
    else {
      i += 1;
    }
  }
  hasil.push(i);
  return hasil;
}

console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let sum = 0;
let simple_recursive = (number) => {
  let numArr = number.toString().split('');
  if(numArr.length === 1){
    return number;
  }
  if(numArr.length === 2){
    sum = numArr[0] * numArr[1];
  }
  if(numArr.length === 3){
    sum = numArr[0] * numArr[1] * numArr[2];
  }
  return simple_recursive(sum);
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
