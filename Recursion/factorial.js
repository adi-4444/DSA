// sum of n numbers

function factorial (n) {     // Head Recurion
   if (n <= 1)
     return 1;
     return n + factorial(n-1);
}
console.log(factorial(5))




// // factorial  product

// head recursion
// function fact(n) {
// 	if (n == 0) {          // base case
// 		return 1;
// 	}
// 	return n * fact(n - 1);
// }




// // tail recursion

// function fact(n, k) {
// 	if (n == 0) return k;      // base case
// 	return fact(n - 1, n * k);
// }
// console.log(fact(5, 1));
