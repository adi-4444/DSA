// printing the stars

function stars(n) {
   let stars = ""
   for (let row = 0; row<n;row++) {          // this loop is for the rows
      for (let coloumn=0; coloumn<=row; coloumn++) { // for adding the stars for each line (not necessary)
         stars +="*"
      }
      console.log(stars)
      stars=""
   }
}
stars(5)


//printing a pyramid stars 

function pyramidStars(n) {
let stars = "*"
   for (let row = 0; row<n;row++) {   
      let spaces =""      
      for (let coloumn=0; coloumn<n-row; coloumn++) { 
         spaces+=" "
      }
      console.log(spaces+stars)
      stars+="**"
   }
}
pyramidStars(5)