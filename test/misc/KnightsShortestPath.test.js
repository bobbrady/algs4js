/* eslint-env mocha */
import chai from 'chai';
import KnightShortestPath from '../../src/misc/KnightShortestPath';

const assert = chai.assert;
let knightPath = null;

describe('KnightShortestPath', () => {
  beforeEach(() => {
    knightPath = new KnightShortestPath(8);
  });

  it('Finds correct moves from A6 to B8, 1 move', () => {
    assert.strictEqual(knightPath.getShortestPath(16, 1), 1);
  });

  it('Finds correct moves from B1 to D5, 2 moves', () => {
    assert.strictEqual(knightPath.getShortestPath(57, 27), 2);
  });

  it('Finds correct moves from H8 to D7, 3 moves', () => {
    assert.strictEqual(knightPath.getShortestPath(7, 11), 3);
  });

  it('Finds correct moves from H1 to G2, 4 moves', () => {
    assert.strictEqual(knightPath.getShortestPath(63, 54), 4);
  });

  it('Finds correct moves from A1 to A8 (first col), 5 moves', () => {
    assert.strictEqual(knightPath.getShortestPath(56, 0), 5);
  });

  it('Finds correct moves from A1 to H8 (diagonal), 6 moves', () => {
    assert.strictEqual(knightPath.getShortestPath(56, 7), 6);
  });
});
