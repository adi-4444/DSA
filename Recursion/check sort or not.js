// Checking araay sorted or not using Recursion

function checkSort(arr, i) {

    if(i === arr.length-1)
        return true;
   let curr = arr[i] <= arr[i+1];
   let next = checkSort(arr, i+1);
   return curr && next
}

console.log(checkSort([5,6,7,1,8,9], 0))