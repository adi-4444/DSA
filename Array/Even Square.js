function evenArr (arr) {
   let evenArray = [] ;
   for (let num of arr) {
      if (num%2 ===0 )
      evenArray.push(num)
   } return evenArray;
}

function squareArr (arr) {
   let squareArray = [] ;
   for (num of arr) {
      squareArray.push(num ** 2)
   } return squareArray ;
}


let arr = [2,3,6,7,8,9]
console.log(squareArr(evenArr(arr)))