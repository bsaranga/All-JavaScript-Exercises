function mapForEach(arr, fn){
    var mapped = [];

    for (var index = 0; index < arr.length; index++) {
        mapped.push(fn(arr[index]));
    }

    return mapped;
}

var checkPastLimit = function(limit, item){
    return item > limit;
}

var arr0 = mapForEach([1,2,3,4,5,6,7,8], checkPastLimit.bind(this, 4));
console.log(arr0);

var checkLimit = function(limit){
    return function(lim, item){
        return item > lim;
    }.bind(this, limit);
}

var arr1 = mapForEach([2,4,6,8,10], checkLimit(4));
console.log(arr1);