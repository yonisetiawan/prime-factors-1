"use strict";

let prime_factors = (angka, hasil = []) => {
  for (var i = 2; i <=angka; i++) {
    while(angka%i==0){
      hasil.push(i);
      angka = angka / i;
    }
  }
  return hasil;
}

let simple_recursive = (valueSR) => {
    var satuan = [];
    var hasil = 1;
    var valueSR = String(valueSR);
    for (var i = 0; i < valueSR.length; i++) {
        satuan.push(valueSR[i]);
    }
    if (satuan.length > 1) {
        for (var i = 0; i < satuan.length; i++) {
            hasil *= satuan[i]
        }
        return simple_recursive(hasil)
    } else {
        return valueSR
    }
}


console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]
console.log("Simpe Recursive");
console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
