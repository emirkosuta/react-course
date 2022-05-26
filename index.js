import { newNumbers } from './spread.js';
import person from './class.js';
import { filterRestFunction } from './rest-operator.js';
import * as desctructure_params from './destructure.js';
import movie from './referenceTypes.js';
import { numbers, maxValue } from './popular-array-functions.js';

person.printName();
person.printGender();

console.log(newNumbers);
console.log(filterRestFunction(1, 2, 3, 4));
console.log(desctructure_params, desctructure_params.age);
console.log(movie.sound());
console.log(`Max value of array ${numbers} is ${maxValue}`);
