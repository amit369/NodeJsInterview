let arr = [1,2,3,4,5,1,2,3];

let duplicates = arr.filter((value,index) => {
          return arr.indexOf(value) !=index
})

let unique = arr.filter((value, index) => {
          return arr.indexOf(value) ==index
})

console.log('Duplicates ', duplicates);
console.log('Unique ', unique );