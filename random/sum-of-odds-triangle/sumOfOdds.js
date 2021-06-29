function rowSumOddNumbers(n) {
    let idx = 1;
    let result = 0;
    for(i = 1; i < n; i++){
        idx += i;
    }
    for(j = 0; j < n; j++){
        result += 2*(idx + j)-1;
    } 
    return result;   
}

console.log(rowSumOddNumbers(42));

// The solution is actually fucking simple, it is Math.pow(n,3)