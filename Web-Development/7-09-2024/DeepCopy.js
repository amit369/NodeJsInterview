let obj = {
    name : "Peter",
    address : {
        city : "Noida",
        state : "UP"
    },
    getData : function ()
    {
        return "all data is here"
    }
};

let user = JSON.parse(JSON.stringify(obj));
user.address.city = "Gurgaon";

console.log(" obj is ", obj);
console.log(" user is ", user);