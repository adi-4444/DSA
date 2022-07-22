// call back function

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
function createPost (post, callback) {  // get posts function is passed as a argument
   setTimeout (()=>{
      posts.push(post);
      callback();    // getpost is called from here => call back function
   },2000)
}

createPost({title:"post three",body:"here is post three"}, getPosts);