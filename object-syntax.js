// /* eslint-disable no-unused-vars */
// //consice body
// const func1 = () => 'Hi'; 


// //block body
// const func1 = () => {
//     return 'Hi';
// };


// //consice body with two parameters where paranthesis is required
// const func1 = (x, y) => x + y;

// //block body 
// const func1 = (x, y) => {
//     return x + y;
// }

// //

// let arr = [1, 2, 3, 4, 5, 6];

// let arr1 = [2, 3, 4, 5, 6];

// //let arr2 = arr.concat(arr1);


// let arr2 = [...arr, ...arr1];

// console.log(arr2)


const name = 'Cody';
const loud = 'loud';

const dog = {
    bark() {
        return 'ruff ruff!'
    },
    name,
    [`${loud}Bark`]() {
        return this.bark().toUpperCase();
    },
}

const {
    bark
} = dog;