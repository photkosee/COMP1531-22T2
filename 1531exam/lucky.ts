export function lucky(startNumber: number, endNumber: number, numberOfRemoves: number): number[] {
  const array: any = [];
  for (let i = startNumber; i <= endNumber; i++) {
    array.push(i);
  }
  if (array[0] !== 1) {
    for (let j = 0; j < numberOfRemoves; j++) {
      if (array[j] > array.length) {
        break;
      }
      let count = 0;
      let curr = array[j];
      for (let k = curr; k - 1 - count < array.length; k += curr) {
        let index = k - count - 1;
        array.splice(index, 1);
        count++;
      }
    }
  } else if (array[0] === 1) {
    for (let j = 1; j <= numberOfRemoves; j++) {
      if (array[j] > array.length) {
        break;
      }
      let count = 0;
      let curr = array[j];
      for (let k = curr; k - 1 - count < array.length; k += curr) {
        let index = k - count - 1;
        array.splice(index, 1);
        count++;
      }
      if (array[j] !== curr) {
        j--;
      }
    }
  }
  return array;
}
