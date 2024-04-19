import { acronym_make } from './acronym';

describe('dryrun', () => {
  test('example', () => {
  	expect(acronym_make(['I am very tired today'])).toStrictEqual(['VTT']);
    expect(acronym_make(['Why didnt I study for this exam more',
    'I dont know'])).toStrictEqual(['WDSFTM', 'DK']);
    expect(acronym_make(['I am oday'])).toStrictEqual(['']);
    expect(acronym_make(['k em day f t t t t t t t f'])).toStrictEqual(['N/A']);
  });

  test('error', () => {
  	expect(() => acronym_make([])).toThrow(Error);
  });
});
