import { construct_dict } from './dictionary'; 

describe('dryrun', () => {
  test('example', () => {
    let l1 = ['a', 'b', 'c'];
    const l2 = [1, 2, 3];
    expect(construct_dict(l1, l2)).toStrictEqual({ a: 1, b: 2, c: 3 });
    l1 = ['a', 'b', 'b'];
    let l3 = ['a', 'b', 'c'];
    expect(construct_dict(l1, l3)).toStrictEqual({ a: 'a', b: 'c' });
    l1 = [];
    l3 = [];
    expect(construct_dict(l1, l3)).toStrictEqual({});
  });
});
