"use strict";

// release 0
let prime_factors = (angka, hasil = []) => {
  // write your code here
   var angkaPembantu1 = 2;
   var angkaPembantu2 = 1;

  while (angkaPembantu1 < angka){
    if(angka % angkaPembantu1 === 0){
      hasil.push(angkaPembantu1);
      angka = angka / angkaPembantu1;
    }
    else{
      angkaPembantu1 = angkaPembantu1+angkaPembantu2;
      angkaPembantu2 = 2;
    }
  }
  hasil.push(angkaPembantu1);
  return hasil;
}

console.log(prime_factors(3)); // [3]
console.log(prime_factors(6)); // [2,3]
console.log(prime_factors(8)); // [2,2,2]
console.log(prime_factors(25)); // [5,5]
console.log(prime_factors(123123123)); // [3, 3, 41, 333667]

// release 1
let simple_recursive = (number) => {
  // write your code here
  var jumlah = 1;
  var angka = String(number);


  if(angka.length === 1){
    return number;
  }
  if(angka.length>1){
    for(var i=0; i<angka.length; i++){
      jumlah *= angka[i];
    }
  }
return simple_recursive(jumlah);

}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
