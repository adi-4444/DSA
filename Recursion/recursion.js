// // basic recursion
function print (n) {  // tail recursion
   if(n==0)
      return;
   console.log(n) 
   print(n-1) // it will print 321
}
print(3)


function print2(n) {  // Head Recursion
   if(n==0)
      return;
      print2(n-1)
   console.log(n) 
    // it will print 123
}
print2(3)

//

// var a = [1,2,3,4,5];
// function b(a,i,n) {
//    if(i>=n){
//       return;
//    }
//    console.log(a[i]);
//    b(a,i+1,n)
// }
// b(a,0,a.length)