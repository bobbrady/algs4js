/* eslint-env mocha */
import chai from 'chai';
import Factorial from '../../src/dynamic-programming/Factorial';

const assert = chai.assert;

describe('Factorial', () => {
  it('Returns 1 for F(0)', () => {
    assert.strictEqual(Factorial.calc(0), 1);
  });
  it('Returns 1 for F(1)', () => {
    assert.strictEqual(Factorial.calc(1), 1);
  });
  it('Returns 2 for F(2)', () => {
    assert.strictEqual(Factorial.calc(2), 2);
  });
  it('Returns 6 for F(3)', () => {
    assert.strictEqual(Factorial.calc(3), 6);
  });
  it('Returns 24 for F(4)', () => {
    assert.strictEqual(Factorial.calc(4), 24);
  });
  it('Returns 5 for F(120)', () => {
    assert.strictEqual(Factorial.calc(5), 120);
  });
  it('Throws and error if input is not an integer >= 0', () => {
    assert.throws(() => Factorial.calc(-42), '-42 is not a valid integer >= 0');
  });
});
