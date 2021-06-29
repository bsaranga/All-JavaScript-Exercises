// Cariage return misinterpreted as automatic semicolon insertion

function getPerson(){
    return // the carraige return here is interpreted as a semicolon after 'return'
    {
        firstName: "saranga"
    }
}

console.log(getPerson());