function intersectionofarray(arr1,arr2,x,y)
{
    let i=0, j=0;
    while(x > i && y > i)
    {
        if(arr1[i]>arr2[j])
        {
            j++
        }
        else if(arr2[j]<arr1[i])
        {
            i++
        }
        else
        {
            console.log(arr2[j] + " ")
            i++;
            j++;
        }
    }
}
arr1 = [3,2,4,4,5,6,5]
arr2 = [1,2,4,6,2,3,4]
let arr3 = arr1.sort((a,b)=> a-b)//[2,3,4,4,5,5,6]
let arr4 = arr2.sort((a,b)=>a-b)//[1,2,2,3,4,4,6]
var x = arr3.length;
var y = arr4.length;
intersectionofarray(arr3,arr4,x,y)