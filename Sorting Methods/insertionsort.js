// insertion sort
function insertionSort(arr, n) {


   for(let i=1;i<n;i++) {
       let key = arr[i];
       let j = i-1;
       while(j>=0 && arr[j] > key) {
           arr[j+1] = arr[j];
           j--;
       }
       arr[j+1] = key;
   }
   return arr;
}
console.log(insertionSort([1,4,7,8,2], 5))