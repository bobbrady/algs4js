/**
 * Class ArrayUtil
 *
 * Provides utility functions for working with arrays of items
 */
class ArrayUtil {

  /**
   * Creates an array of random positive integers
   *
   * @param {Number} size the size of the array
   * @param {Number} MaxValue the maximum value of an element of the array
   * @return {Object} the array of positive integers
   */
  static randomIntArray(size, maxValue) {
    const arr = Array.from({
      length: size
    }, () => Math.floor(Math.random() * maxValue));
    return arr;
  }

  /**
   * Verifys that an array is sorted by increasing order
   *
   * @param {Object} arr, the array to verify.
   * @return {Boolean} true if sorted, false otherwise.
   */
  static isSorted(arr) {
    if (arr.length < 2) {
      return true;
    }
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }

}

export default ArrayUtil;
