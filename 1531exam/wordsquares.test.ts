import { wordsquare } from './wordsquares';

describe('dryrun', () => {
  test('example', () => {
    expect(wordsquare([
      'LAST',
      'OPUS',
      'CATS',
      'DOGS',
      'POST',
      'STOP',
      'NEXT',
      'PIGS',
      'TYPO',
      'COWS',
    ])).toStrictEqual([
      'STOP',
      'TYPO',
      'OPUS',
      'POST',
    ]);
  });

  test('long', () => {
    expect(wordsquare([
      'CARVES',
      'FOSTER',
      'COGENT',
      'SCRIPT',
      'ATTEND',
      'ENRAGE',
      'CALVES',
      'UNREST',
      'CAPPED',
      'LETHAL',
      'EASTER',
      'SOCCER',
      'RENDER',
      'ESCAPE',
      'MAPLES',
      'CRANIA',
      'SCURRY',
      'DECENT',
      'BUGLES',
      'ENLIST',
      'RESETS',
      'VERIFY',
      'BOUGHT',
      'ENDEAR',
      'STYLED',
      'BARBER',
      'RAISES',
      'ESTATE',
      'TAKERS',
      'BASKED',
      'ACCENT',
      'ADVERT',
      'TALKIE',
      'BRUTAL',
      'STARRY',
      'TAUTLY',
      'WEASEL',
      'AGENDA',
      'RAIDED',
      'STRAIT',
      'REELER',
      'ESSAYS',
      'TAPERS',
      'MASSES',
      'TASTED',
      'PRIMAL',
      'BOOTHS',
      'GROTTO',
      'RADIUM',
      'STADIA',
      'BARFLY',
      'INSERT',
      'OCTAVE',
      'SERIAL',
      'SHAVES',
      'PIERCE',
      'ANTLER',
      'SCARES',
      'STOLEN',
      'REPUTE',
      'HARPER',
      'TASTER',
      'ANEMIA',
      'OCTANE',
      'STILLS',
      'POSTER',
    ])).toStrictEqual([
      'MASSES',
      'ACCENT',
      'SCURRY',
      'SERIAL',
      'ENRAGE',
      'STYLED',
    ]);
  });
});