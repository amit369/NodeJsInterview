let arr = [1,2,3,4,5,6,7,8,9,10];

let myarr = arr.map( (item) => {
     if(item%2 ==0)
     {
       
        item = '1 '+ item; 
        return item;
     }
     else {
       return item;
     }
})

console.log(myarr);