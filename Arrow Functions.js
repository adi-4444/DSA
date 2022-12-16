// Arrow functions

function add(a) {
   return function (b) {
      return function (c) {
         return a+b+c
      }
   }
}
console.log(add(2)(3)(4))

// simplifing using arrows

let add1 = (a) => (b) => (c) => a+b+c

console.log(add1(2)(3)(5))