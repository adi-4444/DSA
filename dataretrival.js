let stocks = {
   Fruits: ["strawberry", "grapes", "bananas", "apples"],
   liquid: ["water", "ice"],
   holder: ["cone", "cup", "stick"],
   toppings: ["chocolate", "peanuts"],
 };
 
//  let order = (fruit_name, call_production) => {
//    //get an order
 
//    setTimeout(function () {
//      console.log(`${stocks.Fruits[fruit_name]} was selected`);
 
//      //order placed, call production to start
//      call_production();
//    }, 2000);
//  };
 
//  let production = () => {
//    // console.log("Production has started");
//    setTimeout(() => {
//      console.log("Production has started");
 
//      setTimeout(() => {
//        console.log("The fruit has been chopped");
//        setTimeout(() => {
//          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
//          setTimeout(() => {
//            console.log("Start the Machine");
//            setTimeout(() => {
//              console.log(`Ice cream placed on ${stocks.holder[1]}`);
//              setTimeout(() => {
//                console.log(`${stocks.toppings[0]} as toppings`);
//                setTimeout(() => {
//                  console.log("serve Ice Cream");
//                }, 2000);
//              }, 3000);
//            }, 2000);
//          }, 1000);
//        }, 1000);
//      }, 2000);
//    }, 0000);
//  };
 
//  order(0, production);
 

// With Promises

//  const promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//      resolve("promise is resolved");
//    }, 300);
//  });
 
//  console.log(promise1);
 
//  let is_shop_open = false;
 
//  let order =  (time, work) => {
//    return new Promise((resolve, reject) => {
//      if (is_shop_open) {
//        setTimeout(() => {
//          //work is getting done
//          resolve(work());
//        }, time);
//      } else {
//        reject(console.log("The shop is closed"));
//      }
//    });
//  };
//  //step 1
//  order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//    //step 2
//    .then(() => {
//      return order(0000, () => console.log("production has started"));
//    })
//    .then(() => {
//      return order(2000, () => console.log("Fruit has been chopped "));
//    })
//    .then(() => {
//      return order(1000, () =>
//        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//      );
//    })
//    .then(() => {
//      return order(1000, () => console.log("start the machine"));
//    })
//    .then(() => {
//      return order(2000, () =>
//        console.log(`ice cream placed on ${stocks.holder[1]}`)
//      );
//    })
//    .then(() => {
//      return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
//    })
//    .then(() => {
//      return order(2000, () => console.log("Serve Ice Cream"));
//    })
//    .catch(() => {
//      console.log("Customer Left");
//    })
//    .finally(() => {
//      console.log("End of day");
//    });
 
 //async / await
 
 // async function x(){
 //   try{
 //     await //do something
 //   console.log('hi')
 //   }
 //   catch(error){
 //     console.log(error)
 //   }
 //   finally{
 //     console.log('runs code anyways')
 //   }
 
 // }
 // x().then().catch()
 
 // let is_shop_open = false;
 // //ms is millisecond
 // function time(ms) {
 //   return new Promise((resolve, reject) => {
 //     if (is_shop_open) {
 //       setTimeout(resolve, ms);
 //     } else {
 //       reject("Shop is closed");
 //     }
 //   });
 // }
 
 async function kitchen() {
   try {
     //task that we need to perform
     await time(2000);
     console.log(`${stocks.Fruits[0]} was selected`);
 
     await time(0000);
     console.log("production has started");
 
     await time(2000);
     console.log("fruit has been chopped");
 
     await time(1000);
     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added`);
 
     await time(1000);
     console.log("start the machine");
 
     await time(2000);
     console.log(`ice cream placed on ${stocks.holder[1]}`);
 
     await time(3000);
     console.log(`${stocks.toppings[0]} as toppings`);
 
     await time(2000);
     console.log("Serve the ice cream");
   } catch (error) {
     console.log("Customer left", error);
   } finally {
     console.log("Day ended, shop closed");
   }
 }
 kitchen();
 
 function resolveAfter2Seconds() {
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve("resolved");
     }, 2000);
   });
 }
 async function asyncCall() {
   console.log("calling");
   const result = await resolveAfter2Seconds();
   console.log(result);
 }


 asyncCall();
 
//  let is_shop_open = true;
 
//  if (!is_shop_open) {
//    //do something else
//  } else {
//    //do something if it is true
//  }