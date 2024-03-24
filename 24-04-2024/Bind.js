const person = {
    fullName : function(city, country)
    {
        return `${this.firstName} ${this.lastName} ${city} , ${country}`;
    }
}

const james = {
    firstName : 'Amit',
    lastName : 'Chaman'
}

const fullNamefunc = person.fullName.bind(james, 'London');
const fullName = fullNamefunc('UK');
console.log(' full Name ', fullName);