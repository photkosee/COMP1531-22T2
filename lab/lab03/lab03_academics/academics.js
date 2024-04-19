// Phot Koseekrainiramon (z5387411)
// on 15/06/2022

/**
 * @module academics
 */

/**
 * Create your dataStore here. The design is entirely up to you!
 * One possible starting point is
 *
 * let/const dataStore = {
 *   academics: [],
 *   courses: []
 * }
 *
 * and adding to the dataStore the necessary information when the
 * "register" functions are used.
 *
 * You will also need to modify the clear function accordingly
 * - we recommend you complete clear() at the bottom first!
 * 
 * Do not export the dataStore. Your tests should not use/rely on
 * how dataStore is structured - only what goes in and out of the
 * defined functions from the interface.
 */

let dataStore = {
  academics: [],
  courses: []
}

/**
 * Complete the functions from the interface table.
 * As an optional activity, you can document your functions
 * similar to how academicCreate has been done.
 * Reminder to return { error: 'error' } for error cases.
 */

/**
 * Creates a new academic, returning an object containing
 * a unique academic id
 *
 * @param {string} name
 * @param {string} hobby
 * @returns {{academicId: number}}
 */
export function academicCreate(name, hobby) {
  if (name.length < 1 || hobby.length < 1) {
    return { error: 'error' };
  }
  const academic_id = dataStore.academics.length + 1;
  dataStore.academics.push({
    'academicId': academic_id,
    'name': name,
    'hobby': hobby
  });
  return {
    academicId: academic_id
  };
}

/**
 * Some description
 *
 * @param {number} academicId
 * @param {string} name
 * @param {string} description
 * @returns {{courseId: number}}
 */
export function courseCreate(academicId, name, description) {
  description = description.trim();
  if (name.length != 8 || description.length < 1) {
    return { error: 'error' };
  }
  var is_number = new RegExp("(?=.*\\d).+$");
  var is_upper = new RegExp("^(?=.*[A-Z]).+$");
  for (let i = 0; i < 4; i++) {
    if (!(is_upper.test(name[i]))) {
      return { error: 'error' };
    }
  }
  for (let i = 4; i < 8; i++) {
    if (!(is_number.test(name[i]))) {
      return { error: 'error' };
    }
  }

  const course_id = dataStore.courses.length + 1;
  for (const element of dataStore.academics) {
    if (academicId === element.academicId) {
      dataStore.courses.push({
        courseId: course_id,
        name: name,
        description: description,
        allMembers: [
          {
            academicId: academicId,
            name: element.name,
            hobby: element.hobby,
          }
        ],
        staffMembers: [
          {
            academicId: academicId,
            name: element.name,
            hobby: element.hobby,
          }
        ]
      });
      return {
        courseId: course_id
      };
    }
  }
  
  return {
    error: 'error'
  };
}

/**
 * Some documentation
 */
export function academicDetails(academicId, academicToViewId) {
  let check_academicId = 0;
  for (let i = 0; i < dataStore.academics.length; i++) {
    if (academicId === dataStore.academics[i].academicId) {
      check_academicId = 1;
    }
  }
  if (check_academicId === 0) {
    return { error: 'error' };
  }

  for (const element of dataStore.academics) {
    if (academicToViewId === element.academicId) {
      return {
        academic: {
          academicId: element.academicId,
          name: element.name,
          hobby: element.hobby,
        }
      };
    }
  }
  return {
    error: 'error'
  };
}

export function courseDetails(academicId, courseId) {
  let check_academicId = 0;
  for (let i = 0; i < dataStore.academics.length; i++) {
    if (academicId === dataStore.academics[i].academicId) {
      check_academicId = 1;
    }
  }
  if (check_academicId === 0) {
    return { error: 'error' };
  }
  let check_courseId = 0;
  for (let i = 0; i < dataStore.courses.length; i++) {
    if (courseId === dataStore.courses[i].courseId) {
      for (let j = 0; j < dataStore.courses[i].allMembers.length; j++) {
        if (academicId === dataStore.courses[i].allMembers[j].academicId) {
          check_courseId = 1;
        }
      } 
    }
  }
  if (check_courseId === 0) {
    return { error: 'error' };
  }
  for (let i = 0; i < dataStore.courses.length; i++) {
    if (courseId === dataStore.courses[i].courseId) {
      return {
        course: {
          courseId: courseId,
          name: dataStore.courses[i].name,
          description: dataStore.courses[i].description,
          staffMembers: dataStore.courses[i].staffMembers,
          allMembers: dataStore.courses[i].allMembers,
        }
      };
    }
  }
  return {
    error: 'error'
  };
}

export function academicsList(academicId) {
  let check_academicId = 0;
  for (let i = 0; i < dataStore.academics.length; i++) {
    if (academicId === dataStore.academics[i].academicId) {
      check_academicId = 1;
    }
  }
  if (check_academicId === 0) {
    return { error: 'error' };
  }
  const academics = [];
  for (const element of dataStore.academics) {
    academics.push({
      academicId: element.academicId,
      academicName: element.name
    });
  }
  return {
    academics
  };
}

export function coursesList(academicId) {
  let check_academicId = 0;
  for (let i = 0; i < dataStore.academics.length; i++) {
    if (academicId === dataStore.academics[i].academicId) {
      check_academicId = 1;
    }
  }
  if (check_academicId === 0) {
    return { error: 'error' };
  }
  const courses = [];
  for (let i = 0; i < dataStore.courses.length; i++) {
    courses.push({
      courseId: dataStore.courses[i].courseId,
      courseName: dataStore.courses[i].name
    })
  }
  return {
    courses
  };
}

export function clear() {
  dataStore.academics = [];
  dataStore.courses = [];
  return {};
}
