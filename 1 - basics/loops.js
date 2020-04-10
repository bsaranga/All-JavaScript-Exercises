let i = 12
while(i > 0){
    console.log(`i = ${i}`);
    i--;
}

do{
    console.log('Executed atleast once');
}while(i > 0);

// For loops can have labels to identify the inner loops from the outer loops

outer: for(let i = 0; ;i++){
    inner: for(; ; i++){
        if(i > 10) break inner;
        console.log(`Currently i = ${i} from the inner loop`)
    }
    if(i > 20) break outer;
    console.log(`Currently i = ${i} from the outer loop`)
}

//---------------------------------------------------------------------------

let counter = 0;

while(counter++ < 5){
    console.log(`Counter incremented to ${counter} with post-fix incrementer`);
}

counter = 0;

while(++counter < 5){
    console.log(`Counter incremented to ${counter} with pre-fix incrementer`);
}

//Number string

let result = '';
for(let k = 0; k<9; k++){
    result += String(k)
} console.log(result)

result = ''
for(let k = 0; k<9; ++k){
    result += String(k)
} console.log(result)