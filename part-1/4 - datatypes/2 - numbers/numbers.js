// Writing big and small numbers

let billion = 1e9;
let micro = 1e-5;

console.log(billion);
console.log(micro);

let binary1 = 0b11111111;
let octal1 = 0o377;
let hex1 = 0xFF;

console.log(`Binary: ${binary1}, Octal: ${octal1}, Hex: ${hex1}`);

// Check for numbers and finitude

console.log(isNaN('sdf')); //true
console.log(isNaN('54')); //false

console.log(isFinite(Infinity)); //false
console.log(isFinite(25.2)); //true

// Parsing

console.log(parseInt('34fkjshdfk')); // prints 34
console.log(parseInt('s232')); //NaN

console.log(parseFloat('53.2sd')); // prints 53.2
console.log(parseFloat('53.s2sd')); // prints 53