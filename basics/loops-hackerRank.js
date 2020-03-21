function vowelsAndConsonants(s){
//The function must print the vowels on each line first, and then the consonants on each new line.
    s = s.toString().toLowerCase();
    let vowels = 'aeiou';
    let consonants = 'bcdfghjklmnpqrstvwxyz';

    let outVowels = '';
    let outConsonants = '';
    
    for(let j=0; j<s.length; j++){
        for(let k=0; k<vowels.length; k++){
            if(s[j] === vowels[k]){
                outVowels += `${s[j]} `;
            }
        }
    }
    
    for(let j=0; j<s.length; j++){
        for(let k=0; k<consonants.length; k++){
            if(s[j] === consonants[k]){
                outConsonants += `${s[j]} `;
            }
        }
    }

    console.log(outVowels);
    console.log(outConsonants);
    
}

let someString = 'Phacoemulsification';

vowelsAndConsonants(someString);