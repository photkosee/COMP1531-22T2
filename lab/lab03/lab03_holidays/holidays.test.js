import { holidaysInRange, main } from './holidays';

test('Normal cases', () => {
  expect(holidaysInRange(1970, 1972)).toStrictEqual([
    {
      valentinesDay: 'Saturday, 14.02.1970',
      easter: 'Sunday, 29.03.1970',
      christmas: 'Friday, 25.12.1970',
    },
    {
      valentinesDay: 'Sunday, 14.02.1971',
      easter: 'Sunday, 11.04.1971',
      christmas: 'Saturday, 25.12.1971',
    },
    {
      valentinesDay: 'Monday, 14.02.1972',
      easter: 'Sunday, 02.04.1972',
      christmas: 'Monday, 25.12.1972',
    }
  ]);

  expect(holidaysInRange(1971, 1971)).toStrictEqual([
    {
      valentinesDay: 'Sunday, 14.02.1971',
      easter: 'Sunday, 11.04.1971',
      christmas: 'Saturday, 25.12.1971',
    }
  ]);

  expect(holidaysInRange(325, 326)).toStrictEqual([
    {
      valentinesDay: 'Saturday, 14.02.0325',
      easter: 'Sunday, 19.04.0325',
      christmas: 'Friday, 25.12.0325',
    },
    {
      valentinesDay: 'Sunday, 14.02.0326',
      easter: 'Sunday, 11.04.0326',
      christmas: 'Saturday, 25.12.0326',
    }
  ]);

  expect(holidaysInRange(2027, 2032)).toStrictEqual([
    {
      valentinesDay: 'Sunday, 14.02.2027',
      easter: 'Sunday, 28.03.2027',
      christmas: 'Saturday, 25.12.2027',
    },
    {
      valentinesDay: 'Monday, 14.02.2028',
      easter: 'Sunday, 16.04.2028',
      christmas: 'Monday, 25.12.2028',
    },
    {
      valentinesDay: 'Wednesday, 14.02.2029',
      easter: 'Sunday, 01.04.2029',
      christmas: 'Tuesday, 25.12.2029',
    },
    {
      valentinesDay: 'Thursday, 14.02.2030',
      easter: 'Sunday, 21.04.2030',
      christmas: 'Wednesday, 25.12.2030',
    },
    {
      valentinesDay: 'Friday, 14.02.2031',
      easter: 'Sunday, 13.04.2031',
      christmas: 'Thursday, 25.12.2031',
    },
    {
      valentinesDay: 'Saturday, 14.02.2032',
      easter: 'Sunday, 28.03.2032',
      christmas: 'Saturday, 25.12.2032',
    }
  ]);

  expect(holidaysInRange(2002, 2004)).toStrictEqual([
    {
      valentinesDay: 'Thursday, 14.02.2002',
      easter: 'Sunday, 31.03.2002',
      christmas: 'Wednesday, 25.12.2002',
    },
    {
      valentinesDay: 'Friday, 14.02.2003',
      easter: 'Sunday, 20.04.2003',
      christmas: 'Thursday, 25.12.2003',
    },
    {
      valentinesDay: 'Saturday, 14.02.2004',
      easter: 'Sunday, 11.04.2004',
      christmas: 'Saturday, 25.12.2004',
    }
  ]);

});

test('Error cases', () => {
  expect(holidaysInRange(300, 1972)).toStrictEqual([]);
  expect(holidaysInRange(364, 0)).toStrictEqual([]);
  expect(holidaysInRange(325, 324)).toStrictEqual([]);
  expect(holidaysInRange(2000, 1999)).toStrictEqual([]);
  expect(holidaysInRange(2022, 1972)).toStrictEqual([]);
  expect(holidaysInRange(300, 366)).toStrictEqual([]);
  expect(holidaysInRange(2000, 1999)).toStrictEqual([]);
  expect(holidaysInRange(200, 300)).toStrictEqual([]);
});