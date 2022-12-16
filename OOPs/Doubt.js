
var teacher = "Anup"
let askQuestion = (ques) => {
  console.log(this.teacher, ques)
}
let obj = {
  teacher : "Singh",
	ask : askQuestion
}
obj.ask("What is next")

//-------------------------------------

function Product(n) {
   this.name = n
 }
 
 Product.prototype.display = function () {
  console.log(this.name)
 }
 
 function Mobile(s) {
   this.make = s
 }
 
 Mobile.prototype = Object.create(Product.prototype)
 
 Product.prototype.print = function() {
   console.log("printing")
 }
 let sham = new Mobile("Iphone")
 
 console.log(Adi)

//----------------------------------------

function bucketSort(arr) { // implementation to support decimal sorting from 0-1
	let buckets = Array(arr.length);
    for(let i = 0; i < buckets.length; i++) buckets[i] = [];
	for(let i = 0; i < arr.length; i++) {
		let bucketIndex = Math.floor(arr[i]*10);
        // console.log(bucketIndex);
		buckets[bucketIndex].push(arr[i]);
	}
	for(let i = 0; i < buckets.length; i++) {
		buckets[i].sort((a, b) => a-b);
	}
	let output = [];
	for(let i = 0; i < buckets.length; i++) { // n
		for(let j = 0; j < buckets[i].length; j++) {
			output.push(buckets[i][j]);
		}
	}
    return output;
}

console.log(bucketSort([0.21, 0.17, 0.33, 0.18, 0.47]))

//------------------------------------------]

class A {
   constructor(v) {
       this.x = v;
   }
}

class B extends A {
   constructor(x, y) {
       super(x);
       this.y = y;
       // this.x = x;
   }
}

let b = new B(10, 20);
console.log(b);

//-------------------------------------------------

function gen(x, k) { 
   let ans = x;
   if(x%2 != 0) {
       ans += 2;
   } else {
       ans += 1;
   }
   console.log(ans);
   for(let i = 0; i < k-1; i++) {
       ans += 2;
       console.log(ans);
   }
}

gen(4, 5);