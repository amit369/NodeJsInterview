let obj = {
    name : 'Peter'
}

let user = { ...obj };
user.name = "Sunil";

console.log('obj name is ', obj.name);
console.log('user name is ', user.name);