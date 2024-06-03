const person = [
    {     name : "Amit Chaman", age  : 16
    },
    {
        name : "Sunil" , age : 20
    }
]

const fullAge = person.filter(person => person.age > 17);

console.log(fullAge);