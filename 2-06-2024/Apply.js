
function greet(greeting, punctuation)
{
    console.log(`${greeting}, ${this.name} ${punctuation}`);
}

const person = {
    name : "Amit"
}

greet.apply(person,['Hello','!']);