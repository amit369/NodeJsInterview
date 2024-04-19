let dog = { 
    name : "Buddy"
}

function sayName()
{
    console.log(`My name is  ${this.name}`);
}

let abc = sayName.bind(dog);
abc();