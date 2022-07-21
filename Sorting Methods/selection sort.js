// // selection sort
function selectionSort(arr, n) {

   for(let chintu = 0; chintu < n-1; chintu++) {
       let min_index = chintu;
       for(let pintu=chintu; pintu < n; pintu++) {
           if(arr[min_index] > arr[pintu])
               min_index = pintu;
       }
       swap(arr, min_index, chintu);
   }
   return arr;

}

console.log(selectionSort([3,5,2,1], 4))

function swap(arr, i, j) {
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

console.log('A' < 'B')