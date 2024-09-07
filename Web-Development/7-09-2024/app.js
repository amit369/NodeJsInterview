let obj = {
        name : 'Peter'
}
let user = Object.assign({}, obj);
user.name ="bruce";

console.log("Object is " , obj);
console.log("User is ", user);