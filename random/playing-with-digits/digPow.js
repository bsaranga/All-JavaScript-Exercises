function digPow(n, p) {
    let x = 0;
    String(n).split("").forEach(e => {
        x += Math.pow(e, p);
        p++;
    });
    return x % n ? -1 : x / n
}

function digPow2(n, p) {
    let x = String(n).split("").reduce((acc, cur, idx) => acc + Math.pow(cur, (p + idx)),0);
    return x % n ? -1 : x / n
}

console.log(digPow(695,2));
console.log(digPow2(695,2));