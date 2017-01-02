"use strict";

function cekBilanganPrima(x) {
    var value = 0;
    if (x <= 1) {
        return false
    } else {
        for (var i = 2; i < x; i++) {
            if (x % i == 0) {
                value += 1
            } else {
                value += 0
            }
        }
        if (value > 0) {
            return false;
        } else {
            return true;
        }
    }
}

let prime_factors = (angka, hasil = []) => {
    var hasil = [];
    var sisa = 0;
    var pembagi = 2;
    if (angka <= 1) {
        console.log("Angka Min 2");
    } else if (cekBilanganPrima(angka)) {
        hasil.push(angka);
    } else {
        while (!cekBilanganPrima(angka)) {
            if (angka % pembagi == 0) {
                sisa = angka / pembagi;
                angka = sisa;
                hasil.push(pembagi);
                if (cekBilanganPrima(angka)) {
                    hasil.push(angka)
                }
            } else {
                pembagi++
            }
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
