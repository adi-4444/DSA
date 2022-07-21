// finding the given number is Armstrong ot not

function armStrong(input) {
   let result=0;
   let num = input;
   while (num>0){
      rem = num % 10
      result += rem * rem* rem
      num = parseInt(num /10)
   }
   if (result === input) {
      console.log(" Given number is ArmStrong")
   } else {
      console.log(" Given number is not ArmStrong")
   }
}
armStrong(153)