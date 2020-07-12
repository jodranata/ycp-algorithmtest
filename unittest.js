import { expect } from 'chai';
import solution from './codingtest';

describe('solution', () => {
  it('rotate array to the right times', () => {
    const expected = [9, 7, 6, 3, 8];
    const actual = solution([3, 8, 9, 7, 6], 3);
    expect(actual).to.deep.equal(expected);
  });
});
