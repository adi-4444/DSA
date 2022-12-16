// finding the children names by the recursion

const family = {
   name:'john',
   children: [
      {
         name:'jim',
         children : []
      },
      {
         name : 'zoe',
         children: [
            {name :'kim', children: []},
            {name :'bob',  children: []}
         ]
      }
   ]
}

function childRecusive(f) {
   if (f.children.length === 0) {
      return ;
   }
     f.children.forEach(child => { 
        console.log(child.name)
        childRecusive(child);
      })
       
     
}
 childRecusive(family)


