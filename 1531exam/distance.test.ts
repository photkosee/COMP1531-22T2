import { longest_distance } from './distance';

describe('dryrun', () => {
  test('example', () => {
    expect(longest_distance([1,2,3,1,4])).toBe(3);
    expect(longest_distance([1,2,1,2,1])).toBe(4);
    expect(longest_distance([1,2,3,1,3])).toBe(3);
    expect(longest_distance([1,2,3,4,0])).toBe(0);
  });
});
