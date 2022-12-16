// permutation of the string

function permutation(i, str, lastI) {
   if(i === lastI) {
      console.log(str)
      return
   }
   for(let j=i; j<=lastI;j++) {
      permutation(i+1, swap(i, j, str), lastI);
   }
}

permutation(0,"ABC", 2);

function swap(i,j,str) {
   let charArray = str.split("");
   let temp;
   temp = charArray[i];
   charArray[i]=charArray[j];
   charArray[j]=temp;
   return charArray.join("");
}


// // permutation of string abc -> bac, cba ,cba, cab, acb, bca

// // SWAPPING

// /**
//  *  str = abc
//  *  l = 0
//  * r = 1
//  *
//  */
// function swap(str, l, r) {
// 	let arr = str.split("");
// 	let temp = arr[l];
// 	arr[l] = arr[r];
// 	arr[r] = temp;
// 	return arr.join("");
// }

// function permutation(str, l, r) {
// 	// base condition
// 	if (l == r) {
// 		console.log(str);
// 		return;
// 	}

// 	for (let i = l; i < r; i++) {
// 		str = swap(str, l, i);
// 		permutation(str, l + 1, r);
// 		// backtracking
// 		str = swap(str, l, i);
// 	}
// }

// permutation("ABC", 0, 3);

// /**
//  * l =0
//  * r= 3
//  *
//  *  i = 0 l = 2
//  * swap(0,2,abc) =  cba
//  * rec
//  * abc
//  *
//  * abc
//  *
//  * str = bac
//  */