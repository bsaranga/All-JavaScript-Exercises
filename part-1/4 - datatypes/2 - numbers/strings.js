// Back-tick strings can span multiple lines

let multistring = `Hello everyone
how are
you
`

//console.log(multistring);

console.log('object'.length);

console.log('object'.charAt(0));

// strings are immutable

let plain = 'Plain tea';

plain[0] = 'G';

plain = 'Glain tea'; // re-assignment is possible

console.log(plain);

console.log('\n--------------------------------------------------------------------------------------------------\n')

let oneline = 'stringify';

console.log(oneline.slice(1,5));
console.log(oneline.substr(0,5));

// Refer to the Strings page as needed
// Moving on