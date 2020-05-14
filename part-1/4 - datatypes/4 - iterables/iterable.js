// Iterators

let range = {
    from: 1,
    to: 5
}

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if(this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

console.log(range);

// consuming the iterator; iterating over the iterator
for (let num of range) {
    console.log(num);
}

