"use strict";

// release 0
let prime_factors = (angka, hasil = []) => {
  var p = 2;
  var b = 1;

  while (p < angka){
    if(angka%p === 0){
      hasil.push(p);
      angka = angka/p;
    }
    else{
      p = p+b;
      b = 2;
    }
  }
  hasil.push(p);
  return hasil;
}

console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let simple_recursive = (number) => {
  number = number.toString();
  var hasil = 1;

  if(number.length === 1){
    return Number(number);
  }
  if(number.length>1){
    for(var i=0; i<number.length; i++){
      hasil = hasil * number[i];
    }
  }
return simple_recursive (hasil);
}


console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
