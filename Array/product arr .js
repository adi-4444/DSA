function product (arr, operation) {
   const updated = []
   for (let element of arr) {
      updated.push(operation(element))
   }
   return updated ;
}
function double (num) {
   return num * 2
}

console.log(product ([1,2,3], double))