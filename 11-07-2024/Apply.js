function greet(greeting, punctuation)
{
    console.log(greeting + ", " + this.name + punctuation);
}
const person = {
      name : 'Sunil'
}

greet.apply(person, ['Hello', '!']);