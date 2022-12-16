let arr = [
   {
      id: 2,
      name : "Second name"
   },
   {
      id: 3,
      name : "Third name"
   },
   {
      id: 1,
      name : "First name"
   }
]

let sortedArr = arr.sort((a,b)=>a.id - b.id)
console.log(sortedArr)