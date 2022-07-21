function printn(num) {

   if (num == 0)
     return;
   console.log("* ");
 
   printn(num - 1);
 }n
 
 function pattern(n, i) {
 
   if (n == 0)
     return;
   printn(i);
 console.log("<br/>");
 
   pattern(n - 1, i + 1);
 }
 var n = 5;
 pattern(n, 1);