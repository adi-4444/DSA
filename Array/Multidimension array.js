let arr1 = [
   [1,2,3],
   [4,5,6],
   [7,8,9]
]
let arr2 = [
   [10,11,12],
   [13,14,15],
   [16,17,18]
]


function sumArray(arr1,arr2){
   let result=new Array(arr1.length)
   for(let i=0;i<arr1.length;i++) {
      result [i] = new Array(arr1[i].length)
      for(let j=0; j<arr1[i].length;j++) {
         result[i][j] = arr1[i][j] + arr2[i][j];
      }
   }
   return result;
}


console.log(sumArray(arr1,arr2))