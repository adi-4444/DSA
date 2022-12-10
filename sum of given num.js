

function sumOfDigits(num) {
   let sum = 0
   while (num > 0) {
      let rem = num % 10
      sum += rem
      num = parseInt(num / 10)
   }
   return sum
}


let output = sumOfDigits(5431)
console.log(output)