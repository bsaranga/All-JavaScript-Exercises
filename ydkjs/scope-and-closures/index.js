function foo() {

    let a = "a on foo";
    (bar())();

    function bar() {

        function coo() {
            console.log(`_a_ here is: "${a}"`);
        }

        //coo();

        return coo;
    }
}

foo();