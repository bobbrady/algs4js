# Algorithms and Data Structures with ES6
This repo contains basic algorithms and data structures implemented with ES6.

It provides the following features:
* Basic Algorithms with Data Structures
* Sorting: quicksort, mergesort, heapsort
* Dynamic Programming: factorial, max sub array
* Misc: string interview questions (reverse, palindrome), decimal-to-roman-numeral conversion
* Code written in ES6
* Babel transpiling through a simple gulp task
* Linting with eslint using the AirBnB rules
* Unit tests with mocha
* Test coverage metrics with instanbul
* Latest modules used for all dependencies, including babel v6
* JSDoc style comments used to document the code

## Functionality

|   Function      | Algorithm           | ES5 Requires | ES6 Import  |
| :-------------|:-------------| :-----|
|Sorting | Quick Sort | var QuickSort = require('algs4j').QuickSort | import { QuickSort} from 'algs4j' |
|Sorting | Merge Sort | var MergeSort = require('algs4j').MergeSort | import { MergeSort} from 'algs4j' |
|Sorting | Heap Sort | var HeapSort = require('algs4j').HeapSort | import { HeapSort} from 'algs4j' |
|Dynamic Programming | Factorial | var Factorial = require('algs4j').Factorial | import { Factorial} from 'algs4j' |
|Dynamic Programming | Max Sub Array | var MaxSubArray = require('algs4j').MaxSubArray | import { MaxSubArray } from 'algs4j' |
|Misc String Algs| Palindrome, Reverse | var SimpleStringAlgs = require('algs4j').SimpleStringAlgs | import { SimpleStringAlgs } from 'algs4j' |
|Misc Decimal to Roman| Conversion | var DecimalToRomanNumeral = require('algs4j').DecimalToRomanNumeral | import { DecimalToRomanNumeral } from 'algs4j' |


## Usage
```javascript
import { QuickSort } from 'algs4j';

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(`Unsorted Arr: ${arr}`);
QuickSort.sort(arr);
console.log(`Sorted Arr: ${arr}`);
// arr is now [1, 2, 3, 4, 5]
```
