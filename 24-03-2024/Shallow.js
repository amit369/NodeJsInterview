let obj = {
    name : 'Peter',
    address : {
        city : 'Noida',
        state : 'UP'
    }
};

let user = { ...obj};
user.address.city = "Gurgaon";
console.warn("object is ", obj);