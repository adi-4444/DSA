

function checkPalindrome(str) { 
   let revstr = "";
   let input = str
   for (let i = input.length - 1; i >= 0; i--) {  // reverse a string
     revstr += input[i];
  }
   if (revstr == input) {                       // check palindrome
      console.log("Given string is palindrome ");
   } else {
      console.log("Given string is not palindrome")
   }
 }

 checkPalindrome("madam")
