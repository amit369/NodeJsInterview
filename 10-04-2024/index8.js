let arr= [1,2,3,4,5,6,1,2,3];

function getDuplicates(arr)
{
     return arr.filter((value,index) => {
           return arr.indexOf(value) !== index;
     })
}

const duplicates = getDuplicates(arr);

console.log(duplicates);
let arr2 = [1,2,3,4,5,6];

let newarr = arr2.filter( (item) => item!=6);

console.log('new arr ', newarr);