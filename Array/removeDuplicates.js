var removeDuplicates = function(nums) {
    
   if(nums.length < 2) {
      return nums.length
   }
   
   let p = 0
   
   for (let i = 1; i < nums.length; i++) {
       if(nums[p] === nums[i]) {
          continue
       }
       
       nums[p+1] = nums[i]
       p = p+1
   }
   
   return p+1
   
};
