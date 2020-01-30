function wordCount(sentence){
    let text = ' ' + sentence + ' ';
    let scan = [,]; //[' ', 'x'], ['x', ' '], [' ', ' ']
    let wCount = 0;
    let words = 0;

    for (let i = 1; i <= text.length - 1; i++) {
        scan[0] = text[i - 1];
        scan[1] = text[i];
        if (scan[0] == ' ') {
            wCount += 1;
        }
        if (scan[1] == ' ') {
            wCount += 1;
        }
        if (wCount == 2) {
            words += 1;
            wCount = 0;
        }
    }

    return words;
}

let case1 = "The quick fox jumped over the lazy dog";
let case2 = "   The   quick brown     fox   jumped over the lazy dog";
let case3 = "3500 men camped at Mt.Everest in celebration of the 25th anniversary of ...";

console.log(wordCount(case1));
console.log(wordCount(case2));
console.log(wordCount(case3));