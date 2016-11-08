/**
 * Class MergeSort
 *
 * Implementation of the Quick Sort algorithm using the
 * Hoare partition algorithm.
 */
class MergeSort {

  static sort(arr) {
    this.mergeSort(arr, 0, arr.length - 1);
  }

  static mergeSort(arr, left, right) {
    if (left >= right) {
      return;
    }
    const mid = Math.floor(left + ((right - left) / 2));
    this.mergeSort(arr, left, mid);
    this.mergeSort(arr, mid + 1, right);
    this.merge(arr, left, mid, right);
    return;
  }

  /* eslint no-param-reassign: 0 */
  static merge(arr, left, mid, right) {
    const arrCopy = arr.slice();
    let i = left;
    let j = mid + 1;
    let k = left;
    while (i <= mid && j <= right) {
      if (arrCopy[i] < arrCopy[j]) {
        arr[k] = arrCopy[i];
        i++;
      } else {
        arr[k] = arrCopy[j];
        j++;
      }
      k++;
    }
    while (i <= mid) {
      arr[k] = arrCopy[i];
      k++;
      i++;
    }
    while (j <= right) {
      arr[k] = arrCopy[j];
      k++;
      j++;
    }
  }

}

export default MergeSort;
