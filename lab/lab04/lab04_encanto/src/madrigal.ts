/**
 * Add type annotations to function parameters and replace all type stubs 'any'.
 */

export interface Madrigal {
  name: string;
  age: number;
  gift?: string;
}

export interface Song {
  name: string;
  singers: string | string[];
}

export function createMadrigal(name: string, age: number, gift?: string) {
  if (gift) {
    let newMadrigal = { name: "Pete", age: 21, gift: "smile" };
    newMadrigal.name = name;
    newMadrigal.age = age;
    newMadrigal.gift = gift;
    return newMadrigal;
  } 
  let newMadrigal = { name: "Pete", age: 21 };
  newMadrigal.name = name;
  newMadrigal.age = age;
  return newMadrigal;
}

export function createSong(name: string, singers: string | string[]) {
  if (typeof singers === 'string') {
    let newSong = { name: "Pete", singers: "Pete"};
    newSong.name = name;
    newSong.singers = singers;
    return newSong;
  } else {
    let newSong = { name: "Pete", singers: []};
    newSong.name = name;
    newSong.singers = singers;
    return newSong;
  }
}

export function extractNamesMixed(array: (Madrigal | Song)[]) {
  let allName = [];
  for (const element of array) {
    allName.push(element.name);
  }
  return allName;
}

export function extractNamesPure(array: Madrigal[] | Song[]) {
  let allName = [];
  for (const element of array) {
    allName.push(element.name);
  }
  return allName;
}

export function madrigalIsSinger(madrigal: Madrigal, song: Song) {
  if (typeof song.singers === 'string') {
    if (madrigal.name === song.singers) {
      return true;
    }
  } else {
    for (const singer of song.singers) {
      if (madrigal.name === singer) {
        return true;
      }
    }
  }
  return false;
}

export function sortedMadrigals(madrigals: Madrigal[]) {
  let newMadrigal = [];
  for (const element of madrigals) {
    newMadrigal.push(element);
  }
  newMadrigal.sort(SortMadrigal);
  return newMadrigal;
}

function SortMadrigal(a, b) {
  if ((a.age - b.age) === 0) {
      return byName(a, b);
  }
  return a.age - b.age;
}

function byName(a, b) {
  if ((a.name).toLowerCase() > (b.name).toLowerCase()) {
      return 1;
  } else if ((b.name).toLowerCase() > (a.name).toLowerCase()) {
      return -1;
  } else {
      return 0;
  }
}

export function filterSongsWithMadrigals(madrigals: Madrigal[], songs: Song[]) {
  let allSong = [];
  let check = 1;
  for (const madi of madrigals) {
    for (const song of songs) {
      if (typeof song.singers === 'string') {
        if (madi.name === song.singers) {
          check = 1;
          for (const element of allSong) {
            if (song ===  element) {
              check = 0;
            }
          }
          if (check === 1) {
            allSong.push(song);
          }
        }
      } else {
        for (const singer of song.singers) {
          if (madi.name === singer) {
            check = 1;
            for (const element of allSong) {
              if (song ===  element) {
                check = 0;
              }
            }
            if (check === 1) {
              allSong.push(song);
            }
          }
        }
      }
    }
  }

  return allSong;
}

export function getMostSpecialMadrigal(madrigals: Madrigal[], songs: Song[]) {
  let n = 0;
  let best = 0;
  let pre = n;
  for (let i = madrigals.length - 1; i >= 0; i--) {
    for (const song of songs) {
      if (typeof song.singers === 'string') {
        if (madrigals[i].name === song.singers) {
          n++;
        }
      } else {
        for (const singer of song.singers) {
          if (madrigals[i].name === singer) {
            n++;
          }
        }
      }
    }
    if (n >= pre) {
      pre = n;
      best = i;
    }
    n = 0;
  }
  if (madrigals[best].gift) {
    let bestMadrigal = { name: "Pete", age: 21, gift: "smile" };
    bestMadrigal.name = madrigals[best].name;
    bestMadrigal.age = madrigals[best].age;
    bestMadrigal.gift = madrigals[best].gift;
    return bestMadrigal;
  }
  let bestMadrigal = { name: "Pete", age: 21 };
  bestMadrigal.name = madrigals[best].name;
  bestMadrigal.age = madrigals[best].age;
  return bestMadrigal;
}
