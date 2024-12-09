const fs = require('fs');
const jsc = require('jsverify');
const async = require('async');

eval(fs.readFileSync('code.js') + '');

const testSort = jsc.forall("array nat", async function(arr) {
    var a1 = JSON.parse(JSON.stringify(arr));
    var a2 = JSON.parse(JSON.stringify(arr));

    await parallelMergesort(a1);
    a2.sort(function(a, b) { return a - b; });

    return JSON.stringify(a1) === JSON.stringify(a2);
});

jsc.assert(testSort);
