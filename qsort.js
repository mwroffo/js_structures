const util = require('util');

/** 
 * An implementation of quicksort with last elem as pivot.
 * PERFORMANCE:
 * best case Nlg(N) when every pivot is the median
 * average case Nlg(N)
 * worst case N^2 when pivot is always greatest or least
 * i.e. already sorted or reverse-sorted case.
 * SPACE complexity: in-place sort. No auxilary space necessary.
*/
function qsort(a) {
    help_qsort(a, 0, a.length-1);
}
function help_qsort(a, lo, hi) {
    if (lo < hi) {
        var pivot = partition(a, lo, hi);
        help_qsort(a, lo, pivot-1);
        help_qsort(a, pivot+1, hi-1);
    } // else base case, so just return.
}
/**
 * places the last elem of this array in its sorted position.
 * @param {the array to partition} a 
 * @param {the inclusive lower bound to partition} lo
 * @param {the inclusive upper bound to partition} hi
 */
function partition(a, lo, hi) {
    var pivot = a[hi];
    var si = lo;
    for (j = lo; j < hi; j++) {
        if (a[j] <= pivot) {
            swap(a, j, si);
            si++;
        }
    }
    swap(a, si, hi);
    return si;
}
function swap(a, i, j) {
    if (i != j) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}
function arrayEquals(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (a.length !== b.length) return false;
    for (var i=0; i<a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

/**
 * [TEST CLIENT]
 */
function main() {
    var test_index = 0;
    var ez = [1,2,5,4,3];
    var dups = new Array(0,4,4,2,2);
    var negs = [];
    var negs2 = [1,1,0,-2,-3];
    negs.push(-1,0,3,2,1,1);
    var worst = new Array();
    worst.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    var also_worst = [10,9,8,7,6,5,4,3,2,1];

    console.log("TEST\tRESULT\t\t\tBEFORE\t\t\tEXPECTED\t\tACTUAL");
    qsort(ez);
    ez_sorted = [1, 2, 3, 4, 5];
    // console.log("ez\t", arrayEquals(ez, ez_sorted), "\t\t", ez_sorted, "\t", ez);
    var dups_after = dups.slice();
    qsort(dups_after);
    dups_sorted = [0,2,2,4,4];
    console.log("dups\t", arrayEquals(dups_after, dups_sorted), "\t\t\t", dups, "\t", dups_sorted, "\t", dups_after);
    negs_sorted = [-1, 0, 1, 1, 2, 3];
    var negs_after = negs.slice();
    qsort(negs_after);
    console.log("negs\t", arrayEquals(negs_after, negs_sorted), "\t\t\t", negs, "\t", negs_sorted, "\t", negs_after);

    var negs2_sorted = [-3, -2, 0, 1, 1];
    var negs2_after = negs2.slice();
    qsort(negs2_after);

    console.log("negs2\t", arrayEquals(negs2_after, negs2_sorted), "\t\t\t", negs2, "\t", negs2_sorted, "\t", negs2_after);
}
// where it all begins:
main();