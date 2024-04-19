import {
  academicCreate,
  courseCreate,
  academicDetails,
  courseDetails,
  academicsList,
  coursesList,
  clear,
} from './academics';

// FIXME
// This is a sample test that tests many functions
// You may want to break this up into multiple tests.
describe('All tests', () => {
  test('error creating academics', () => {
    // Every test should be indendent of other tests. This can be achieve by
    // clearing and reinitialising the database.
    // You may want to look at Jest's beforeEach and afterEach.
    clear();

    // Empty name
    expect(academicCreate('', 'dancing')).toStrictEqual({ error: 'error' });
    expect(academicCreate('partying', '')).toStrictEqual({ error: 'error' });
    expect(academicCreate('', '')).toStrictEqual({ error: 'error' });
  });

  test('correct return type and values', ()=> {
    // Consider beforeEach
    clear();

    const academic = academicCreate('Magnus', 'chess');

    // NOTE: We don't actually know what the generated ID should be
    expect(academic).toStrictEqual(
      expect.objectContaining({
        academicId: expect.any(Number),
      })
    );

    // However, we can still use this ID in other functions
    expect(academicDetails(academic.academicId, academic.academicId)).toStrictEqual({
      academic: {
        academicId: academic.academicId,
        name: 'Magnus',
        hobby: 'chess',
      }
    });

    // Note the different key for "name" in this function - refer to "Data Types"
    // When comparing arrays with multiple items, you may want to convert each
    // array into a Set (since we don't know which order the items will be in).
    expect(academicsList(academic.academicId)).toStrictEqual({
      academics: [
        {
          academicId: academic.academicId,
          academicName: 'Magnus',
        }
      ]
    });

    const course = courseCreate(academic.academicId, 'COMP1531', 'computing')
    expect(course).toStrictEqual(
      expect.objectContaining({
        courseId: expect.any(Number),
      })
    );

    expect(courseDetails(academic.academicId, course.courseId)).toStrictEqual({
      course: {
        courseId: course.courseId,
        name: 'COMP1531',
        description: 'computing',
        allMembers: [
          {
            academicId: academic.academicId,
            name: 'Magnus',
            hobby: 'chess',
          }
        ],
        staffMembers: [
          {
            academicId: academic.academicId,
            name: 'Magnus',
            hobby: 'chess',
          }
        ]
      }
    });

    expect(coursesList(academic.academicId)).toMatchObject({
      courses: [
        {
          courseId: course.courseId,
          courseName: 'COMP1531',
        }
      ]
    });
  });

  test('correct return type and values', ()=> {
    clear();

    const academic = academicCreate('Magnus', 'chess');
    const academic2 = academicCreate('Pete', 'fighting');
    const academic3 = academicCreate('Earn', 'reading');

    const course = courseCreate(academic.academicId, 'COMP1531', 'computing');
    const course2 = courseCreate(academic.academicId, 'COMP1531', 'computing');
    const course3 = courseCreate(academic.academicId, 'COMP1531', 'okay');

    expect(academicDetails(academic.academicId, academic2.academicId)).toStrictEqual({
      academic: {
        academicId: academic2.academicId,
        name: 'Pete',
        hobby: 'fighting',
      }
    });

    expect(academicsList(academic3.academicId)).toStrictEqual({
      academics: [
        {
          academicId: academic.academicId,
          academicName: 'Magnus',
        },
        {
          academicId: academic2.academicId,
          academicName: 'Pete',
        },
        {
          academicId: academic3.academicId,
          academicName: 'Earn',
        }
      ]
    });

    expect(coursesList(academic3.academicId)).toStrictEqual({
      courses: [
        {
          courseId: course.courseId,
          courseName: 'COMP1531',
        },
        {
          courseId: course2.courseId,
          courseName: 'COMP1531',
        },
        {
          courseId: course3.courseId,
          courseName: 'COMP1531',
        }
      ]
    });

  });

  test('error creating courses', ()=> {

    clear();
    const academic = academicCreate('Phot', 'pete');
    expect(courseCreate('', 'COMP1531', 'computing')).toStrictEqual({ error: 'error' });
    expect(courseCreate(academic.academicId, 'ComP1531', 'computing')).toStrictEqual({ error: 'error' });
    expect(courseCreate(academic.academicId, 'COMP1531', '')).toStrictEqual({ error: 'error' });
    expect(courseCreate(academic.academicId, 'COMP15*0', 'computing')).toStrictEqual({ error: 'error' });
    expect(courseCreate(academic.academicId, 'COM 1531', 'computing')).toStrictEqual({ error: 'error' });
    expect(courseCreate(academic.academicId, '1234', 'computing')).toStrictEqual({ error: 'error' });
  });

  test('error course detailing', ()=> {

    clear();
    const academic = academicCreate('Phot', 'pete');
    const academic2 = academicCreate('Earn', 'june');
    const course = courseCreate(academic.academicId, 'COMP2521', 'computing');
    const course2 = courseCreate(academic2.academicId, 'COMP1531', 'computing');
    expect(courseDetails('123456', course.couseId)).toStrictEqual({ error: 'error' });
    expect(courseDetails(academic.academicId, '34567')).toStrictEqual({ error: 'error' });
    expect(courseDetails(academic2.academicId, course.couseId)).toStrictEqual({ error: 'error' });
    expect(courseDetails(academic.academicId, course2.couseId)).toStrictEqual({ error: 'error' });
  });

  test('error academic detailing', ()=> {

    clear();
    const academic = academicCreate('Phot', 'pete');
    const academic2 = academicCreate('Earn', 'june');
    expect(academicDetails(academic.academicId, '')).toStrictEqual({ error: 'error' });
    expect(courseDetails('12345ab', '6789ab')).toStrictEqual({ error: 'error' });
  });

  test('error academics and courses listing', ()=> {

    clear();
    const academic = academicCreate('Phot', 'pete');
    const academic2 = academicCreate('Earn', 'june');
    expect(academicsList('123456abc')).toStrictEqual({ error: 'error' });
    expect(academicsList(' ')).toStrictEqual({ error: 'error' });
    expect(coursesList('123456abc')).toStrictEqual({ error: 'error' });
    expect(coursesList('')).toStrictEqual({ error: 'error' });
  });


});


