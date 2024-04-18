let arr = ['kuldeep.tyagi@tcs.com', 'amit.chaman@tcs.com'];

let newarr = arr.map((item) => {
    let parts = item.split('@');
    let nameParts= parts[0].split('.');
    return{
        firstName : nameParts[0],
        lastName : nameParts[1],
        domain : parts[1]
    }
})

console.log(newarr);