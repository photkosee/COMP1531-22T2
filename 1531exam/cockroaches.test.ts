import { decontaminate } from './cockroaches';
import { writeFileSync } from "fs";

describe('dryrun', () => {
  /**
   * @param cockroaches an object of the form
   * {
   *     'monday.txt': ['kitchen', 'attic', 'bathroom'],
   *     'tuesday.txt': ['kitchen', 'bedroom', 'backyard'],
   * }
   */
  function generate_files(cockroaches: any) {
    for (const filename of Object.keys(cockroaches)) {
      writeFileSync(filename, cockroaches[filename].join('\n'));
    }
  }

  test('example', () => {
    generate_files({
      'monday.txt': ['kitchen', 'attic', 'bathroom'],
      'tuesday.txt': ['kitchen', 'backyard'],
    });
    const files = ['monday.txt', 'tuesday.txt'];
    expect(decontaminate(files)).toStrictEqual({ attic: 1, bathroom: 1, backyard: 1, bedroom: 0, kitchen: 2 });
  });
});
