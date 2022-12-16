let arr = [2,9,0,1,3]
let number = 5

let obj = {}

for(let i=0; i<arr.length; i++) {
   let subresult = number - arr[i]
   if (obj[subresult]) {
      console.log(`${subresult} -- ${arr[i]}`)
   } else {
      obj[arr[i]] = true
   }
}