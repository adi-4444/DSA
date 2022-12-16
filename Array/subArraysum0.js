/* function sum0subArr (arr) {
   for (let l=0 ; l < arr.length ; l++) {
      for (let r = l ; r<arr.length; r++) {
         let sum = ""
         for(let k = l ; k <= r ; k++) {
            sum += arr[k] + ",";
         }
        if (sum == 0) return false;
      }
   }
   return true;
}

console.log(sum0subArr([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]))


 */



// function sum0subArr(arr) {
//    for(let l = 0; l < arr.length; l++) {
//        let sum = 0;
//        for(let r = l; r < arr.length; r++) {
//            sum += arr[r]; 
//            if(sum == 0) return true;
//        }
//    }
//    return false;
// }

// console.log(sum0subArr([3,4,-7,3,1,3,1,-4,-2,-2]));


