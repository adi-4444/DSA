// Async Await function

let posts = [
   {title : "post one", body : "here is the first post"},
   {title : "second one", body : "here is the second post"}
];

function getPosts () {
   setTimeout(() =>{
      let result = ""
      posts.forEach((post,index)=> {
         result=result + `<li>${post.title}<li>`; 
      });
      document.body.innerHTML = result;        // print on webpage
   },1000);
}
function createPost (post) {
   return new Promise ((resolve,reject)=> {
      setTimeout(()=>{
         posts.push(post);
         const error = true;
         if (!error) {
            resolve ();
         } else {
            reject ("error : somthing went wrong");
         }
      },2000)
})
}

async function x() {
   await createPost({title:"post three",body:"here is post three"});  // after using Async have to use Await
   getPosts();
}



// test question 1

// async function f() { 
//    let result = 'first!'; 
//    let promise = new Promise((resolve, reject) => { 
//       setTimeout(() => resolve('done!'), 1000); 
//    });
//       result = await promise; 
//       console.log(result); 
// } 
   
//    f();