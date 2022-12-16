
// You have been given an integer array A of sixe 2N .you have to partition the element of array 
// A into two groups x and y such the every element of array A should belong to exactly one group 
// after partition ,both group x and y should have sixe N


const A = [1, 2, 3, 4, 5, 6, 7, 8];

function pair(arr) {
    let l = arr.length;
    let x = [];
    let y = [];
    let result = new Array(2); // getting an array having 2 elements object inside [<2 empty items>]
    for (let i = 0; i < l; i++) {
        i < l / 2 ? x.push(arr[i]) : y.push(arr[i]); // length =8 so first 4 elements in x and then y
    }
    for (let i = 0; i < x.length; i++) {
        result[i] = [x[i], y[i]]; // destructuring method of assigning values to those empty items from x and y array
    }
    console.log(result);
}

pair(A);