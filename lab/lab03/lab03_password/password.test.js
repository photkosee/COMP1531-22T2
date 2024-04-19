// Phot Koseekrainiramon (z5387411)
// on 11/06/2022

/**
 * @see password
 * @module password.test
 */

import { checkPassword } from './password';



// You can remove or replace this with your own tests.
// TIP: you may want to explore "test.each"
describe('Example block of tests', () => {
  test('Example test 1', () => {
    expect(checkPassword('something')).toEqual('Poor Password');
  });

  test('Example test 2', () => {
    expect(checkPassword('not a good test')).toEqual('Poor Password');
  });

  test('Example test 3', () => {
    expect(checkPassword('1234567')).toEqual('Poor Password');
  });

  test('Example test 4', () => {
    expect(checkPassword('ABlo567')).toEqual('Poor Password');
  });

  test('Example test 5', () => {
    expect(checkPassword('ABloGhoorPoor')).toEqual('Poor Password');
  });

  test('Example test 6', () => {
    expect(checkPassword('123456789')).toEqual('Horrible Password');
  });

  test('Example test 7', () => {
    expect(checkPassword('password')).toEqual('Horrible Password');
  });

  test('Example test 8', () => {
    expect(checkPassword('password1')).toEqual('Moderate Password');
  });

  test('Example test 9', () => {
    expect(checkPassword('PASSword1')).toEqual('Moderate Password');
  });

  test('Example test 10', () => {
    expect(checkPassword('PASS12345678910')).toEqual('Moderate Password');
  });

  test('Example test 11', () => {
    expect(checkPassword('passwordAB96')).toEqual('Strong Password');
  });
  
  test('Example test 12', () => {
    expect(checkPassword('pa      AB96')).toEqual('Strong Password');
  });
  
  test('Example test 13', () => {
    expect(checkPassword('          ')).toEqual('Poor Password');
  });
  
  test('Example test 14', () => {
    expect(checkPassword('@#$%^*()//2')).toEqual('Moderate Password');
  });
  
});


