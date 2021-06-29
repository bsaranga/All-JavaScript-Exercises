function findEvenIndex(arr) {
    let median = Math.round(arr.length / 2);
    let iter = 0;

    let lArr = arr.slice(0, median);
    let rArr = arr.slice(median, arr.length);

    function sum(i, j) {
        return i + j
    }

    while(lArr.reduce(sum,0) != rArr.reduce(sum,0)) {
        
        if(lArr.reduce(sum,0) > rArr.reduce(sum,0)) {
            lArr = arr.slice(0, median - 1);
            rArr = arr.slice(median, arr.length);
            median --;
        }

        if(lArr.reduce(sum,0) < rArr.reduce(sum,0)) {
            lArr = arr.slice(0, median - 1);
            rArr = arr.slice(median, arr.length);
            median ++;
        }

        iter ++;

        if(iter > arr.length) {
            return -1;
        }
    }

    return median;
}

console.log(findEvenIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));