"use strict";

// release 0
function isPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}
function primegenerator(num){
  var angkaprima = []
  for (var i = 2; i <= num; i++){
    if (isPrime(i) == true){
      angkaprima.push(i)
    }
  }
  return angkaprima
}

let prime_factors = (angka, hasil = []) => {
  // write your code here
  var angkaprima = primegenerator(angka)
  for (var i = 0; i < angkaprima.length; i++){
    if (angka % angkaprima[i] == 0){
      angka /= angkaprima[i]
      hasil.push(angkaprima[i])
      i--
    }
  }
  return hasil
}

console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
// console.log(prime_factors(123123123)); // [3, 3, 41, 333667]
// release 1
let simple_recursive = (number) => {
  // write your code here
  number = number.toString();
  number = number.split("");
  var hasil = 1
  if (number < 10){
    return number.join('');
  }
  for (var i = 0; i< number.length; i++){
    hasil *= number[i]
  }
  return simple_recursive(hasil);
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
