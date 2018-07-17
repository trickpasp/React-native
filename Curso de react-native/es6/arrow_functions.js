/* Functions */

/* Named Function */
function soma1(x, n) {
    return x + n;
}

console.log(soma1(1,2));

/* Anonymous Function */
var soma2 = function (x, n) {
    return x + n;
}

console.log(soma2(3,4));
/* *********ES6********* */
/* Arrow Function */
const soma3 = (x, n) => {
    return x + n;
}

console.log(soma3(5,6));

const soma4 = (x, n) => x + n;

console.log(soma4(7,8));

const array = [1, 2, 3, 4, 5].map(x => x * 10);

console.log(array);