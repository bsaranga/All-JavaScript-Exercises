import crypto from 'crypto-js';

// Password based key derivation function

let salt = crypto.lib.WordArray.random(128/8);
let key128Bits = crypto.PBKDF2("THis is the password", salt, { keySize: 128 / 32 });
let password = crypto.PBKDF2("THis is the password", salt, { keySize: 128 / 32 });
let password2 = crypto.PBKDF2("This is the password", salt, { keySize: 128 / 32 });

console.log(key128Bits.toString());

console.log(key128Bits.toString() === password.toString());
console.log(key128Bits.toString() === password2.toString());