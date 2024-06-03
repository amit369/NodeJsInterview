function greet(greeting)
{
    console.log(`${greeting}, ${this.name}`);
}

const person = {
    name : 'Alice'
}

greet.call(person,"Hello");