function greet(greeting , punctuation)
{
 console.log(`${greeting} , ${this.name} ${punctuation}`);
}

const person = {
    name : "Sandeep"
}

const boundgreet= greet.bind(person,'Hello');
boundgreet('!');