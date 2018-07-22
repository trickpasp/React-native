

let a = 123;

const incrementA = () => {
    a++;
}

// incrementA();
// incrementA();
// incrementA();

// console.log(a);

const immutableIncrement = x => {
    return x + 1;
}

a = immutableIncrement(a);
a = immutableIncrement(a);
a = immutableIncrement(a);
// console.log(a);

/* ------------------ */
let state = {
    number: 123,
    name: 'Patrick Silva'
}
console.log(state);
const incrementNumber = () => {
    state.number++;
}

// incrementNumber();
// console.log(state);

const incrementState = paramState => {
    paramState.number++;
}

// incrementState(state);
// console.log(state);
const pureIncrementNumber = state => {
    // const newState = Object.assign({}, state);
    // newState.number++;
    // return newState;
    return Object.assign({}, state, {number: state.number + 1});
}

state = pureIncrementNumber(state);
console.log(state);