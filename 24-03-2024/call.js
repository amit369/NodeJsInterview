const person = {
    fullName : function(city, country){
        return `${this.firstName} ${this.lastName} , ${city}, ${country}`;
    }
}
const john = {
    firstName : 'John',
    lastName : "Doe"
}

const fullName = person.fullName.call(john, 'New York', 'USA');
console.log(fullName);