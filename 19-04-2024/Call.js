let obj = {
     name : 'Amit'
}

function greet(greeting)
{
    console.log(`${greeting}, ${this.name}`)
}

greet.call(obj,"Hello");