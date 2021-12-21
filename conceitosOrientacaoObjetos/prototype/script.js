const people = {
    maos: 2
}

console.log(Object.getPrototypeOf(people));
console.log(Object.getPrototypeOf(people)==Object.prototype);
console.log(people.hasOwnProperty('maos'));



const newPeople = Object.create(people);

console.log(newPeople.maos);
console.log(Object.getPrototypeOf(newPeople) === people);