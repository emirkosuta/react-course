import { newNumbers } from './spread.js';
import { person } from './class.js';
import { filterRestFunction } from './rest-operator.js';

person.printName();
person.printGender();

console.log(newNumbers);
console.log(filterRestFunction(1, 2, 3, 4));
