import crypto from 'crypto-js'

var hashmd5 = crypto.MD5("Message");
console.log(hashmd5.toString());

var hashsha1 = crypto.SHA1("Message");
console.log(hashsha1.toString());

var hashsha2 = crypto.SHA256("Message");
console.log(hashsha2.toString());

var hashsha512 = crypto.SHA512("Message");
console.log(hashsha512.toString());

var hashsha3 = crypto.SHA3("Message", {outputLength: 512});
console.log(hashsha3.toString());

console.log(`\nBase 64 encoded: ${hashmd5.toString(crypto.enc.Base64)}`);
console.log(`Hex encoded: ${hashmd5.toString(crypto.enc.Hex)}`);

// HMAC

var passphrase = "breakingbad";
var passphrase2 = "bettercallsaul";
var hashHmacMd5 = crypto.HmacMD5("This is the girl", passphrase);
var hashHmacMd5_2 = crypto.HmacMD5("This is the girl", passphrase2);
console.log(hashHmacMd5.toString());
console.log(hashHmacMd5_2.toString());