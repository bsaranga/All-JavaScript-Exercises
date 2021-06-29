function printerError(s) {
    let err = 0;
    s.split("").forEach(e => {
        (/^[a-m]+$/i.test(e)) ? 0 : err++
    });
    return `${err}/${s.length}`;
}

console.log(printerError('abcxyz'));

// A far simpler solution

function printerError2(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}