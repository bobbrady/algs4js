import MergeSort from './sorting/MergeSort';
import QuickSort from './sorting/QuickSort';
import HeapSort from './sorting/HeapSort';
import Factorial from './dynamic-programming/Factorial';
import MaxSubArray from './dynamic-programming/MaxSubArray';
import SimpleStringAlgs from './strings/SimpleStringAlgs';
import DecimalToRomanNumerals from './misc/DecimalToRomanNumeral';

module.exports = {
  // Sorting
  quickSort: QuickSort.quickSort,
  mergeSort: MergeSort.mergeSort,
  heapSort: HeapSort.heapSort,
  // Dynamic Programming
  fatorial: Factorial.calculateFactorial,
  maxSubArray: MaxSubArray.findMaxSubArray,
  // Strings,
  simpleStringAlgs: SimpleStringAlgs,
  // Misc
  decimalToRomanNumerals: DecimalToRomanNumerals
};
