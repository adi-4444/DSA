function subsequence(arr, index, curr) { 
   if(index === arr.length) { 
      console.log(curr); 
      return; 
   } 
   subsequence(arr, index+1, curr); //exclusion 
   curr.push(arr[index]); 
   subsequence(arr, index+1, curr); // inclusion curr.pop(); 
} 
subsequence([3,1,2], 0, []);

// // subsequence abc [3,1,2];  - order does not matter

// // function subSequence(arr, index, subseq) {
// // 	// base condition
// // 	if (index == arr.length) {
// // 		console.log(subseq);
// // 		return;
// // 	}
// // 	subseq.push(arr[index]);
// // 	subSequence(arr, index + 1, subseq);
// // 	// backtracking
// // 	subseq.pop();
// // 	subSequence(arr, index + 1, subseq);
// // }

// // subSequence([3, 1, 2], 0, []);