import { lucky } from './lucky';

describe('dryrun', () => {
  test('start with non 1', () => {
    expect(lucky(2, 16, 6)).toStrictEqual([2,4,6,10,12]);
    expect(lucky(2, 5, 0)).toStrictEqual([2,3,4,5]);
    expect(lucky(2, 50, 7)).toStrictEqual([2,4,6,10,12,18,20,22,26,34,36,42,44,50]);
  });

  test('start with 1', () => {
    expect(lucky(1, 3, 0)).toStrictEqual([1,2,3]);
    expect(lucky(1, 19, 4)).toStrictEqual([1,3,7,9,13,15]);
  });
});
