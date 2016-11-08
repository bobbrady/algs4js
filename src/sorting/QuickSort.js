import logger from '../util/LogUtil';
/**
 * Class QuickSort
 *
 * Implementation of the Quick Sort algorithm using the
 * Hoare partition algorithm.
 */
class QuickSort {

  static sort(arr) {
    this.quickSort(arr, 0, arr.length - 1);
  }

  static quickSort(arr, left, right) {
    const idx = this.partition(arr, left, right);
    if (right <= left) {
      return;
    }
    this.quickSort(arr, left, idx);
    this.quickSort(arr, idx + 1, right);
  }

  /* eslint no-param-reassign: 0 */
  static partition(arr, first, last) {
    // Protect against overflow by adding delta to first index
    const pivot = arr[Math.floor(first + ((last - first) / 2))];
    // Hoare algorithm: start outside bounds for cleaner loop code
    let left = first - 1;
    let right = last + 1;
    while (left < right) {
      while (arr[++left] < pivot);
      while (arr[--right] > pivot);
      if (left < right) {
        this.swap(arr, left, right);
      }
    }
    logger.debug(`Before return: left => ${left}, right => ${right}`);
    return right;
  }

  static swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

}

module.exports = QuickSort;
