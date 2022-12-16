// forEach will print each element in an array

let a = [1,2,3,4,5,6]

a.forEach((number,index) => console.log(number*2,index)) 

a.forEach((number) => number*2) 
console.log(a) // forEach method don't return anything and won't change original array

// array a values are assigned to number        // in Index array index values are stored

// Map is used to loop the array and return the array but not modifies the current array

let newA = a.map(num => {   // transforms the array
   return num * 2         // num.toString(2) used to make binary
})
console.log(newA) // Map also doesn't change original array but its returns new modified array


// Filter is used to filter the array and return the value

let newB = a.filter(num => {
   return num%2===0//  (num <3 or anything will return , num%2 is used for Odd  )      
})
console.log(newB)

// find is used to find the element and return after satisfies the condition it will stop there

let newC = a.find(num => {
   return num>2// (it check num and once num>2 it will return 3 and stop.. won't chrck furthur)      
})
console.log(newC)

// Some is used to print true or false, if one element in the array satisfies the condition returns true else false

let newD = a.some(num => {
   return num>3// (any element matches then true, if num > 8 it return false)      
})
console.log(newD)

//Every is used check every element to satisfies the condition if satisfies it returns true

let newE = a.every(num => {
   return num>3// (if one element does'nt matches it returns false, if num > 0 it return true)      
})
console.log(newE)

// Reduce is used to reduce the array to single value by performing the operation

let newF = a.reduce((acc,curr) => {
   return acc = acc + curr
},0)  //  
console.log(newF)

//includes is used to check the value is avaliable in the array or not

let newG = a.includes(3)
console.log(newG)  // return true if exist return false if not exists

// converting names to upper case

let names = ["apple","relevel","microsoft","developer"]
let upperCaseNames = names.map((name)=>name.toUpperCase())
console.log(upperCaseNames)

let names2 = [ "APPLE","RELEVEL","MICROSOFT","DEVELOPER" ]
let lowerCaseNames = names.map((name)=>name.toLowerCase())
console.log(lowerCaseNames)


// difference between in and of 
let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}