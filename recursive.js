"use strict";

// release 0
let prime_factors = (angka, hasil = []) => {
  for (var i = 2; i <=angka; i++) {
    while (angka%i===0) {
      hasil.push(i);
      angka = angka / i;
    }
  }

  return hasil;
}

console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let simple_recursive = (number) => {
  var num = number.toString();

  if(num.length===1){
    return num[0];
  }
  else{
    if(num.length===2){
      return simple_recursive(Number(num[0])*Number(num[1]));
    }
    if(num.length===3){
      return simple_recursive(Number(num[0])*Number(num[1])*Number(num[2]));
    }
  }


}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
