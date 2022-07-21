
// printing Even numbers using Recursion

function print (n) {
   if(n==0 || n==-1)
      return;
      if(n%2 !== 0)
      print(n-1);
      else{
         print(n-2)
         console.log(n) 
      }
}
print(10)