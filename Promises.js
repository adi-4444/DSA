// promises function

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

createPost({title:"post three",body:"here is post three"}.then(getposts).catch((error)=>console.log(error)));