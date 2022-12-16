// 1.
function recursive(n) {
   if(n<1)  return 0;
     return n + recursive(n-1)
   
}
console.log(recursive(4))

// 2. 
function  sum(n){       // here program starts
  if(n == 1) return 1;
return n + sum(n-1);
}




