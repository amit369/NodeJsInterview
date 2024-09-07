const _ = require('lodash');


let obj = {
       name : "Peter",
       address : {
              city : "Noida",
              state : "Up"
       },
       getData : function()
       {
         return "all data is here"
       }
};

let user = _.cloneDeep(obj);
user.address.city = "Gurgaon";

console.log("object is ", obj);
console.log("user is ", user);