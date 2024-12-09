const async = require('async');

async function parallelMerge(array) {
    let tmp = new Array(array.length);
    await mergeSort(array, 0, array.length - 1, tmp);
}

async function mergeSort(array, lower, higher, tmp) {
    if (lower >= higher){
      return; 
    }

    let middle = Math.floor((lower + higher) / 2); 

    await async.parallel([
        async () => await mergeSort(array, lower, middle, tmp),
        async () => await mergeSort(array, (middle + 1), higher, tmp) 
    ]);

    merger(array, lower, middle, higher); 
}

function merger(a, b, c, d){
    let max = Math.max(a[c], a[d]) + 1;
    let i = b, j = c + 1, k = b;
    while ((i <= c) && (j <= d) && (k <= d)) {
        let val1 = a[i] % max;
        let val2 = a[j] % max;
        if (val1 <= val2) {
            a[k] += (val1 * max);
            i++;
            k++;
        }
        else {
            a[k] += (val2 * max);
            j++;
            k++;
        }
    }
    while (i <= c) {
        let tme = a[i] % max;
        a[k] += (tme * max);
        i++;
        k++;
    }
    while (j <= d) {
        let tme = a[j] % max;
        a[k] += (tme * max);
        j++;
        k++;
    }
    for (let i = b; i <= d; i++)
        a[i]= Math.floor(a[i] / max);
}
