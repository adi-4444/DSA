// let arr1 = [1,2,3,4,"a",5,6];
// let arr2 = [5,6,"a",7,8,9,10];

// array = [...arr1,...arr2]

// function method1(arr) {
//    let set = new Set(arr);
//      console.log(set)
// }
// method1(array)


// 2 nd method 
let arr1 = [1,2,3,4,5,6];
let arr2 = [5,6,7,8,9,10];
array = [...arr1,...arr2]
function method2(arr) {
  let temp = [];
  for(let i=0; i<arr.length;i++) {
     if (temp.indexOf(arr[i]) == -1) {
        temp.push(arr[i]);
     }
  }
   return temp;
}
let a=method2(array)
console.log(a)