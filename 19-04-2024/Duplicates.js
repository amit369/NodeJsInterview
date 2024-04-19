let arr = [1,2,3,4,5,1,2,3];

let duplicates = arr.filter((item,index) => {
    return arr.indexOf(item) !==index
})


let unique = arr.filter((item,index) => {
    return arr.indexOf(item)==index
})
console.log('duplicates ', duplicates);
console.log('unique ', unique);