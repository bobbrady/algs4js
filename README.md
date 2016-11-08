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

|   Function      | Algorithm           | Import  |
| :-------------|:-------------| :-----|
|Sorting | Quick Sort | import { QuickSort} from 'algs4j' |
|Sorting | Merge Sort | import { MergeSort} from 'algs4j' |
|Sorting | Heap Sort | import { HeapSort} from 'algs4j' |
|Dynamic Programming | Factorial | import { Factorial} from 'algs4j' |
|Dynamic Programming | Max Sub Array | import { MaxSubArray } from 'algs4j' |
|Misc String Algs| Palindrome, Reverse | import { SimpleStringAlgs } from 'algs4j' |
|Misc Deciaml to Roman| Conversion | import { DecimalToRomanNumeral } from 'algs4j' |


## Usage
```javascript
import { QuickSort } from 'algs4j';

const arr = [5, 4, 3, 2, 1];
QuickSort.sort(arr);

// arr is now [1, 2, 3, 4, 5]
```
