// counting no.of letters are there in string using Objects

let str = "relevel"

let arr = str.split("")

let obj = {}

for (let i=0; i<=arr.length; i++) {
  if (obj[arr[i]]) {
     obj [arr[i]] += 1
  } else {
     obj [arr[i]] = 1
  }
}
for ([key,value] of Object.entries(obj)) {
   console.log(`${key} -----> ${value}`)
}
