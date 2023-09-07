// 스프레드 연산자 복사 붙여넣기 -----
// let test = [];

// const name12 =[{
//     a: '1',
//     b: '2',
//     c: '3',
//     d: '4',
//     e: '5',
// }]

// test = name12.map((value) => ({
//     ...value,
//     a: 5
// }))

// console.log(test);

// for in -----
// var obj = {
//     a: 1, 
//     b: 2, 
//     c: 3
// };

// for (var prop in obj) {
//     console.log(obj[prop]); // a 1, b 2, c 3
// }

// for of -----
// var iterable = [10, 20, 30];

// for (var value of iterable) {
//   console.log(value);
// }

// Object.assign -----
const target = { a: 1, b: 5 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// source 반영하고 싶은 객체임
console.log(target);