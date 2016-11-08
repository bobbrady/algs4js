/* eslint-env mocha */
import chai from 'chai';
import MergeSort from '../../src/sorting/MergeSort';
import ArrayUtil from '../../src/util/ArrayUtil';
import logger from '../../src/util/LogUtil';

const assert = chai.assert;
let randArr = [];

describe('MergeSort', () => {
  beforeEach(() => {
    randArr = ArrayUtil.randomIntArray(100, 100);
    logger.debug(`Random Array to be sorted: ${randArr}`);
    MergeSort.sort(randArr);
    logger.debug(`Sorted Array: ${randArr}`);
  });
  it('Sorts random array of size 100: Test 1', () => {
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
  it('Sorts random array of size 100: Test 2', () => {
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
  it('Sorts random array of size 100: Test 3', () => {
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
  it('Sorts random array of size 100: Test 4', () => {
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
  it('Sorts random array of size 100: Test 5', () => {
    assert.isTrue(ArrayUtil.isSorted(randArr));
  });
});
