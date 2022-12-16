class Rectangle {  // Class Setup

   constructor (height, width, color) {   // Helps to create or initialize an object
      // instance proerties
      this.height = height
      this.width = width
      this.color = color

   }
     // instance methods
     areaRectangle() {
        return this.width * this.height
     }
}

//   initialize an object

let rectangle1 = new Rectangle(5,4,"blue")
let rectangle2 = new Rectangle(4,4,"red")
console.log(rectangle1.areaRectangle(),rectangle2.areaRectangle())