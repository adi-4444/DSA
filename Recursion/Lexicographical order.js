/**
 * lexicographical printing (dictionary order)n = 1000
 * 1
 * 10
 * 100
 * 1000
 * 101
 * ...
 * 109
 * 11
 * 110
 *
 * ....
 *
 * 119
 *
 *                           1              -2 - 3  -4 ....9.
 *                         10 11... 19     20 21 ..29    30
 *                      100 101
 *                        1000
 */
 function lexo(n) {
	for (let i = 1; i <= 9; i++) {
		children(i, n);
	}
}

function children(i, n) {
	if (i > n) return;

	console.log(i);
	for (let j = 0; j < 10; j++) {
		children(10 * i + j, n);
	}
}

/**
 * 10*i = 10
 *
 *
 */
