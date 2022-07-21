// finding no.of ways for the students to go to party, either can go alone or two...

function noOfWays(n) {
   if (n===0 || n===1)
      return 1;
   return noOfWays(n-1)+(n-1)*noOfWays(n-2);
}

console.log(noOfWays(5))

// finding no.of ways for the tile on the floor


function tile(n) {
   if (n===0 || n===1)
       return n
       return tile(n-1) + tile(n-2);
}
console.log(tile(9))


// finding count maze path


function countMaze(m, n) { 
   if(m === 1 || n === 1) 
   return 1; 
   return countMaze(m-1, n) + countMaze(m, n-1); 
} 
console.log(countMaze(2, 3))

// no of ways brackets problem 

function printBrackets(open, close, n, str) {

   if(open+close === 2*n) {
       console.log(str);
       return;
   }
   if(open < n) {
       printBrackets(open+1, close, n, str+'(')
   }

   if(open > close) {
       printBrackets(open, close+1, n, str+')')
   }

}

printBrackets(0, 0, 2, '')