function array (arr) {

let result = 0;

 for(let i = 0; i<arr.length; i++) {

   let maxLeft = -1;
   for (let j=0;j<=i;j++) {
      maxLeft = maxLeft < arr[j] ? arr[j] : maxLeft
   }
   let maxRight = -1
   for (let j=i;j<arr.length;j++) {
      maxRight = maxRight < arr[j] ? arr [j] : maxRight
   }
   let min = maxLeft < maxRight ? maxLeft : maxRight
   result = result + (min - arr[i]);
   
 }
     console.log(result)
}

//  array ([3,0,2,0,4])

const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
rl.question("give the array ? ", function(arr) {
     array(arr.split(""))
});