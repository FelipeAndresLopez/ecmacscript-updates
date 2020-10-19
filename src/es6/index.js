function defaultParamsEs5(name, age, country) {
  var name = name || 'Felipe';
  var age = age || 32;
  var country = country || 'MX';
}

function defaultParamsEs6(name = 'Felipe', age = 29, country = 'CO') {
  console.log(name, age, country)
}

defaultParamsEs6();
defaultParamsEs6('Jorge', 30, 'MX');


let hello = 'Hello';
let world = 'world';
let epicPhraseEs5 = hello + ' ' + world;
console.log(epicPhraseEs5)


let epicPhraseEs6 = `${hello} ${world}`;
console.log(epicPhraseEs6);

const multiLineEs5 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
  'Sed at tortor id sem varius molestie fermentum sed turpis. Nullam luctus quam.';

const multiLineEs6 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed at tortor id sem varius molestie fermentum sed turpis. Nullam luctus quam.`;

const objAccessing = {
  name: 'Felipe Lopez',
  age: 29
}

console.log(objAccessing.name, objAccessing.age);

const { name, age } = objAccessing;

console.log(name, age);

const setNames1 = ['Felipe', 'Jorge', 'NIdia'];
const setNames2 = ['Silvia', 'Liliana', 'Oscar'];

const spreadValues = ['Linda', ...setNames1, ...setNames2];

console.log(spreadValues)

{
  var globalScope = 'Global scope'
}

{
  let localScope = 'Local Scope';
  console.log(localScope)

}

console.log(globalScope)
console.log(localScope)   // This expresion throw an error

const name = 'Felipe';
const age = 29;

objEs5 = { name: name, age: age };
objEs6 = { name, age };

console.log(objEs5);
console.log(objEs6);

const people = [
  { name: 'Felipe', age: 29 },
  { name: 'Jorge', age: 30 },
];

let listOfNameEs5 = people.map(function (person) {
  console.log(person.name)
});


let listOfNameEs6 = people.map((person) => console.log(person.name));


const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey');
    } else {
      reject('Oops');
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('another step'))
  .catch(error => console.log(error))

class Calculator {
  constructor() {
    this.firstNum = 0;
    this.secondNum = 0;
  }
  sum(stNum, ndNum) {
    this.firstNum = stNum;
    this.secondNum = ndNum;
    return this.firstNum + this.secondNum;
  }
}

const calculator = new Calculator();

console.log(calculator.sum(2, 3))

import { hello } from './module';

hello();

function* helloWorldGenerator() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
}

const generatorHW = helloWorldGenerator();

console.log(generatorHW.next().value)
console.log(generatorHW.next().value)
console.log(generatorHW.next().value)

