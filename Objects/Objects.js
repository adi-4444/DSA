// Creating Objects 

let Laptop3 ={
   make : "Dell",
   memory: "1 TB",
   ram : "8 Gb",
   model : "i7 11 Gen"
}
console.log(Laptop3)

// objects using constucts and .this key word

function Mobile (company,memory,ram,color) {
   this.company = company
   this.memory = memory
   this.ram  = ram
   this.color = color
}

let mobile1 = new Mobile("samsung","128 GB","8 GB","Blue")

console.log(mobile1.memory) 

// Looping (itration ) of the Objects

for (KeyName in mobile1) {
   console.log(`${KeyName}     ${mobile1[KeyName]}`)
}

// Objects. Entries() Methods 

let entries = Object.entries(mobile1)  // it will change the Objects
for(entry of entries) {                // into an Array
   console.log(entry)
}

// Object Values

let value = Object.values(mobile1)  // it will print only values
console.log(value)                  // in an Array

// Object Assign

let mobile2 = Object.assign({}, mobile1) //assign is used to create a duplicate of object
mobile2.company = "Iqoo 3"               // without changing the key and values
console.log(mobile2)

// Destucture an Object

let {company : destructuredCompany} = mobile2
console.log(destructuredCompany)

// .is opertor is a strict operator for ===
console.log(Object.is(+0, -0))

