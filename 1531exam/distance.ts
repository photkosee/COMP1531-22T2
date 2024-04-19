export function longest_distance(elements: number[]): number {
  let longest = 0;
  for (let i = 0; i < elements.length; i++) {
    let tmp_longest = 0;
    let count = 0;
    for (let j = i + 1; j < elements.length; j++) {
      count++;
      if (elements[i] === elements[j]) {
        tmp_longest = count;
      }
    }
    if (longest < tmp_longest) {
      longest = tmp_longest;
    }
  }
  return longest;
}