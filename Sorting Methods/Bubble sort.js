// // bubble sort

function bubbleSort(arr, n) {

   for(let i=0;i<n-1;i++) { // pass
       for(let j=0;j<n-i-1;j++) {
           if(arr[j] > arr[j+1]) {
               swap(arr, j, j+1);
           }
       }
   }
   return arr;
}
console.log(bubbleSort([8, 2, 0, 5, 1, 0], 6))

function swap(arr, i, j) {
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

console.log('A' < 'B')