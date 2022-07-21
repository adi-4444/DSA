// finding vowles(a e i o u ) in a given string

function str(string) {

  let smallcasestr = string.toLowerCase() // convering to lower case
  let str = smallcasestr.split("")
  let count = 0;
  let a=0;
  let e=0;
  let i=0;
  let o=0;
  let u=0;

  for(let x=0; x<=str.length; x++){
      if("a" == str[x] || "e" == str[x] || "i" == str[x] || "o" == str[x] ||"u" == str[x])
      count++
      if ("a" == str[x])
          a++
       else if ("e" == str[x]) 
          e++
       else if ("i" == str[x]) 
          i++
       else if ("o" == str[x]) 
          o++
       else if ("u" == str[x]) 
          u++
    
   }
  console.log("no of Vowels present in given input "+string+" are "+count)
  console.log("no of A's present "+a)
  console.log("no of E's present "+e)
  console.log("no of I's present "+i)
  console.log("no of O's present "+o)
  console.log("no of U's present "+u)

}

str("Aaa eE i oO uuU");