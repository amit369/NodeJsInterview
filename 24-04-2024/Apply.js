const person = {
    fullName : function(city, country)
    {
        return `${this.firstName} ${this.lastName} , ${city} , ${country}`
    }
}

const jane = {
    firstName : "Amit",
    lastName : "Chaman"
}

const fullName = person.fullName.apply(jane, ['Los Angeles', 'USA']);
console.log(fullName);