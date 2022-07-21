function counter () {
   let a = 0;
   function increment() {
     return a = a + 1;
   }
   return a;
}

let incrFunc = counter ();
console.log(incrFunc());
console.log(incrFunc());
console.log(counter()());


