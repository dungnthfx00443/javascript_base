var personObj1 = {
    name: 'Alex',
    age: 30
};

var person = personObj1;
person.age = 25;

person = {
    name: 'John',
    age: 50
};

var personObj2 = person;

console.log(personObj1);//(1)
console.log(personObj2); //(2)