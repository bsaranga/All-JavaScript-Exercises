// Lexical Environments and Scope

const lexicalEnv = "global";

function a(){
    const lexicalEnv = "a";

    function c(){
        const lexicalEnv = "c";

        function b(){
            console.log(`My lexical env = ${lexicalEnv}`);
        }

        b();
    }

    c();
}

a();