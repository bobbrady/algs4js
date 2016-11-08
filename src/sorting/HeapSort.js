/**
 * Class HeapSort
 *
 * Classic implementation of using a max heap to sort an array
 */
class HeapSort {

  /**
   * Perform heap sort in-place on an array
   *
   * @param {object} arr - the array to be sorted
   */
  static heapSort(arr) {
    // Build max heap so max item is at top (index zero)
    this.buildHeap(arr);
    // Swap max value at top for last item.  Tickle down top value to N-1 heap.
    for (let size = arr.length - 1; size > 0; size--) {
      this.swap(arr, 0, size);
      this.trickleDown(arr, size, 0);
    }
  }

  /**
   * Build a max-heap
   *
   * @param {object} arr - the array to be put into max heap form
   */
  static buildHeap(arr) {
    const firstNonLeaf = this.parent(arr.length - 1);
    for (let i = firstNonLeaf; i >= 0; i--) {
      this.trickleDown(arr, arr.length, i);
    }
  }

  /**
   * Trickle a node value down to its proper place in a max-heap
   *
   * @param {object} arr - the in-place array being sorted
   * @param {number} size - the number of items in the (sub)heap being trickleDown
   * @param {number} i - the parent node start point for the trickle down.
   */
  static trickleDown(arr, size, i) {
    let parent = i;
    while (parent < size) {
      const left = this.left(parent);
      const right = this.right(parent);
      let largest = parent;
      if (left < size && arr[left] > arr[parent]) {
        largest = left;
      }
      if (right < size && arr[right] > arr[largest]) {
        largest = right;
      }
      if (largest !== parent) {
        this.swap(arr, parent, largest);
        parent = largest;
      } else {
        return;
      }
    }
  }

  /* eslint no-param-reassign: 0 */
  /**
   * Simple array swap function
   *
   * @param {object} arr - the array whose elements will be swapped
   * @param {number} i - An index value whose value will be swapped
   * @param {number} j - Another index value whose value will be swapped
   */
  static swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  /**
   * Returns the index of the parent for a child node
   *
   * @param {number} i - the child node index
   * @return {number} the index of the parent
   */
  static parent(i) {
    return Math.floor((i - 1) / 2);
  }

  /**
   * Returns the index of the left child for a parent node
   *
   * @param {number} i - the parent node index
   * @return {number} the index of the left child
   */
  static left(i) {
    return (2 * i) + 1;
  }

  /**
   * Returns the index of the parent for a node
   *
   * @param {number} i - the parent node index
   * @return {number} the index of the right child node
   */
  static right(i) {
    return (2 * i) + 2;
  }
}

/* Debug code
const arr = [3, 1, 5, 2, 4, 5, 6, 23];
console.log(`Before heapSort, arr: ${arr}`);
HeapSort.heapSort(arr);
console.log(`After heapSort, arr: ${arr}`);
*/
export default HeapSort;
