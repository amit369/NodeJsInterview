let obj = {
    name : 'Peter',
    address : {
        city : "Noida",
        state : "Up"
    }
}

let user = {...obj};
user.address.city="Gurgaon";

console.log('object is ', obj);