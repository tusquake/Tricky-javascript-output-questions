# Tricky-javascript-output-questions

// Q1.
// let a = [];
// let b = [];
// console.log(a==b);
// console.log(a===b);
// output:
// false
// false

// ___________________________

// Q2.
// let a = [];
// let b = a;
// console.log(a==b);
// console.log(a===b);
// output:
// true
// true

// ___________________________

// Q3.
// let a = [20];
// let b = [20];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);
// output:
// true
// true

// ___________________________

// Q4.
// let z=[1,2,3,4];
// let a = {name:"Tushar"};
// console.log(...z);
// output:
// 1 2 3 4 

// ___________________________

// Q5.
// console.log(typeof NaN);
// output:
// number

// ___________________________

// Q6.
// let data = 10 - -10;
// console.log(data);
// output:
// 20

// ___________________________

// Q7.
// const set = new Set([1,1,2,3,4]);
// console.log(set);
// output:
// Set(4) { 1, 2, 3, 4 }

// ___________________________

// Q8.
// let data = {name:"Tushar"};
// console.log(delete data.name);
// output:
// true

// ___________________________

// Q9.
// let data = {name:"Tushar"};
// console.log(delete data);
// output:
// false

// ___________________________

// Q10.
// const data = ["peter","tussu","hussu"];
// const [y] = data;
// console.log(y);
// output:
// peter

// ___________________________

// Q11
// const data = ["peter","tussu","hussu"];
// const [,y] = data;
// console.log(y);
// output:
// tussu

// ___________________________

// Q12.
// const data = {name:"Tushar" ,age:20 , skill : "JS"}
// const {name} =data;
// console.log(name);
// output:
// Tushar

// ___________________________

// Q13.
// let data = {name:"Tushar" ,age:20 , skill : "JS"}
// let info = {dept : "CSE" , city : "kolkata"}
// data = {...data,...info};
// console.log(data);
// output:
// { name: 'Tushar', age: 20, skill: 'JS', dept: 'CSE', city: 'kolkata' }

// ___________________________

// Q14.
// let data = {name:"Tushar" ,age:20 , skill : "JS"}
// let info = {dept : "CSE" , city : "kolkata"}
// data = {data,...info};
// console.log(data);
// output:
// {
//     data: { name: 'Tushar', age: 20, skill: 'JS' },      
//     dept: 'CSE',
//     city: 'kolkata'
// }

// ___________________________

// Q15
// const name = 'Tushar'
// console.log(name());
// output:
// TypeError: name is not a function

// ___________________________

// Q16
// const result = false || {} || null;
// console.log(result);
// output:
// {}

// ___________________________

// Q17
// const result = null || false || '';
// console.log(result);
// output:
// ''
// ___________________________

// Q18
// const result = [] || 0 || true;
// console.log(result);
// output:
// []

// ___________________________

// Q19.
// console.log(Promise.resolve(5));
// output:
// Promise { 5 } (fulfilled)

// ___________________________

// Q20.
// console.log('🧡' == '🧡')
// console.log('🧡' === '🧡')
// output:
// true
// true

// ___________________________

// Q21
// JSON.parse();
// what this method will do?
// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// ___________________________

// Q22.
// let name = 'sidhu'
// function getname(){
//     console.log(name);
//     let name = 'Tushar';
// }
// getname();
// output:
// Cannot access 'name' before initialization

// ___________________________

// Q23.
// let name = 'sidhu'
// function getname(){
//     let name = 'Tushar';
//     console.log(name);
// }
// getname();
// output:
// Tushar

// ___________________________

// Q24.
// let name = 'sidhu'
// function getname(){
//     console.log(name);
// }
// getname();
// output:
// sidhu

// ___________________________

// Q25.
// console.log(`${(x => x)('I love you')} too program`);
// output:
// I love you too program

// ___________________________

// Q26.
// function sumValues(x,y,z){
//     return x+y+z;
// }
// console.log(sumValues(...[1,2,3]));
// output:
// 6

// ___________________________

// Q27.
// const name = 'Tushar is a good boy'
// console.log(!typeof name === 'object')
// console.log(!typeof name === 'string')
// console.log(!typeof name === false)
// output:
// false
// false
// true

// ___________________________

// Q28.
// const name = "Subscribe";
// const age = 21;
// console.log(isNaN(name));
// console.log(isNaN(age));
// output:
// true
// false

// ___________________________

// Q29.
// let person = {name : "Tushar"};
// Object.seal(person);
// person.name = "Seth";
// person.age = 19
// console.log(person);
// output:
// { name: 'Seth' }

// Q30.
// let data = ["a","b","c"];
// delete data[1];
// console.log(data.length);
// output:
// 3

// ___________________________

// Q31.
// let a = [1,2,3,4];
// let b = [4,5,6];
// let c = [...a,...b];
// console.log(c);
// output:
// [
//     1, 2, 3, 4,
//     4, 5, 6    
// ]

// ___________________________

// Q32.
// let a =2;
// setTimeout(() => {
//     console.log(a)
// }, 0);
// a=100
// output:
// 100

// ___________________________

// Q33.
// let a=1;
// let b=1;
// let c=2;
// console.log(a === b === --c);
// output:
// false

// ___________________________

// Q34.
// console.log([[[[[]]]]]);
// output:
// [ [ [ [Array] ] ] ]

// ___________________________

// Q35.
// how to find OS name?
// navigator.platform
// output:
// 'win32'

// ___________________________

// Q36.
// function fruit(){
//     console.log(name);
//     console.log(price);
//     var name = "apple"
//     let price = 20;
// }
// fruit();
// output:
// undefined
// ReferenceError: Cannot access 'price' before initialization

// ___________________________

// Q37.
// console.log(+true);
// console.log(typeof +true);
// output:
// 1
// number

// ___________________________

// Q38.
// let data = "size";
// const bird = {
//     size: "seth"
// };
// console.log(bird[data])
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data)
// output:
// seth
// seth
// seth
// undefined

// ___________________________

// Q39.
// let a = 3;
// let b = new Number(3);
// console.log(a==b)
// console.log(a===b)
// output:
// true
// false

// ___________________________

// Q40.
// const person = {name: 'Tushar'};
// function sayhi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayhi.call(person,21));
// console.log(sayhi.bind(person,21));
// console.log(sayhi.bind(person,21)());
// output:
// Tushar is 21
// [Function: bound sayhi]
// Tushar is 21

