let val;

val = document;
val = document.all;
val = document.all[7];
val = document.all.length;

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach((script) => console.log(script.getAttribute('src')));

console.log(val);