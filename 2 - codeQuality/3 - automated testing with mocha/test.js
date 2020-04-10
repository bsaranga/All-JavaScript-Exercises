describe("testing-power-functions", function () {
    
    describe("manual-checking", () => {
        it("2 raised to the power 3 is 8", function () {
            assert.equal(pow(2, 3), 8);
        });

        it("3 raised to the power 4 is 81", function () {
            assert.equal(pow(3, 4), 81);
        });

        it("4 raised to the power 2 is 16", () => assert.equal(pow(4, 2), 16));
    });

    describe("checking-powers-of-3", () => {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, () => assert.equal(pow(x,3), expected));
        }
    
        for( let x = 1; x <= 10; x++ ) {
            makeTest(x);
        }
    });

    describe("checking-multiple-inputs", () => {
        function multiTest(x, n) {
            let expected = x ** n;
            it(`${x} to the power ${n} is ${expected}`, () => assert.equal(pow(x,n), expected));
        };

        for( let x = 1; x <= 5; x++) {
            for( let y = 1; y <= 5; y++) {
                multiTest(x,y);
            };
        };
    });
});

/*
    Each test must test only a single scenario.

    Tests can be grouped by using nested 'describe' blocks.

    Each 'assert' statement must be within an 'it' block; do not put multiple 'asserts' in 'it' blocks. Because if one assert encounters an error, it will terminate and other asserts are not run.
*/