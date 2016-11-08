/* eslint-env mocha */
import chai from 'chai';
import MaxSubArray from '../../src/dynamic-programming/MaxSubArray';

const assert = chai.assert;

describe('MaxSubArray', () => {
  it('Finds correct max sum for [1, -3, 2, 1, -1]', () => {
    const arr = [1, -3, 2, 1, -1];
    assert.strictEqual(MaxSubArray.find(arr), 3);
  });

  it('Finds correct max sum for single element arr [1]', () => {
    const arr = [1];
    assert.strictEqual(MaxSubArray.find(arr), 1);
  });

  it('Finds correct max sum for all negative arr [-10, -2, -3, -1, -3, -2]', () => {
    const arr = [-10, -2, -3, -1, -3, -2];
    assert.strictEqual(MaxSubArray.find(arr), -1);
  });

  it('Finds correct max sum for all positive arr = [1, 2, 3, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5];
    assert.strictEqual(MaxSubArray.find(arr), 15);
  });

  it('Returns null for an empty arr = []', () => {
    const arr = [];
    assert.isNull(MaxSubArray.find(arr));
  });

  it('Returns null for a non-arr = {foo: \'bar\'}', () => {
    const arr = {
      foo: 'bar'
    };
    assert.isNull(MaxSubArray.find(arr));
  });
});
