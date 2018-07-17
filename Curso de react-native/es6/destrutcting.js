
/* ES5 */
var pet = {
    name: 'Tokinho',
    specie: 'hamster',
    age: 1.6
}

var age = pet.age;

console.log(age);

/* ES6 */

var { age } = pet;

console.log(age);