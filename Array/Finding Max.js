//finding Max value in an array

let array =[2,5,9,4,8,6,3]

function findMax(arr) {
   let max = 0;
   for(let i=0; i<=arr.length; i++) {
      if(arr[i]> max) {
         max = arr[i] ;
      }
   } return max ;
}

let maxValue = findMax(array)
console.log(maxValue)