function maskify(cc) {
    return "#".repeat((cc.length - 4 < 0) ? 0 : cc.length - 4) + cc.substring(cc.length - 4);
}

function maskify2(cc) {
    return cc.replace(/.(?=....)/g, '#');
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"))