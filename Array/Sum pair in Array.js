const arr = [4,0,2,7,1]
// sorted Array = [0,1,2,4,7]
const number = 5
let sortedArray = arr.sort((a,b) => a-b)
let p1 = 0
let p2 = arr.length-1
while (p1 < p2) {
   let temp = sortedArray[p1]+sortedArray[p2]
   if(temp === number) {
      console.log(arr[p1] + " " + arr[p2])
      break;
   } else if (temp < number) {
      p1 ++ ;
   } else {
      p2 -- ;
   }
}