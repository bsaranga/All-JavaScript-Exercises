let condition = true;

function pow(x, n){
    let result = 1;

    for(let i = 0; i < n; i++){
        result *= x;
    }

    return result;
}

//Egyptian style curly braces - the opening curly brace is on the same line as the condition only separated by a space.

if(condition) {
    //do this
    //do that
}

//Nobody likes a long line of text, they must be split up into separate lines to increase readability.
