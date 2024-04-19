import { getObjections, Objection, ExaminationType } from './objection';

describe('argumentative cases', () => {
  test.each([
    {
      question: 'You are totally lying!',
      testimony: 'No you!',
      type: ExaminationType.CROSS,
      objections: new Set([Objection.ARGUMENTATIVE]),
    },
    {
      question: 'This is direct, yes!',
      testimony: 'Yes, so not argumentative!',
      type: ExaminationType.DIRECT,
      objections: new Set([]),
    },
  ])('$objections', ({ question, testimony, type, objections }) => {
    expect(getObjections(question, testimony, type)).toEqual(objections);
  });
});

describe('compound cases', () => {
  test.each([
    {
      question: 'Is it white? Is it black?',
      testimony: 'No you is!',
      type: ExaminationType.CROSS,
      objections: new Set([Objection.COMPOUND]),
    },
    {
      question: 'Is it white? Is it black?',
      testimony: 'Yes, so is not argumentative!',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.COMPOUND]),
    },
    {
      question: 'No, no, no, no, no',
      testimony: 'Yes, so no compound?!?',
      type: ExaminationType.DIRECT,
      objections: new Set([]),
    },
  ])('$objections', ({ question, testimony, type, objections }) => {
    expect(getObjections(question, testimony, type)).toEqual(objections);
  });
});

describe('hearsay cases', () => {
  test.each([
    {
      question: 'Is it white?',
      testimony: 'Heard from Pete is',
      type: ExaminationType.CROSS,
      objections: new Set([Objection.HEARSAY]),
    },
    {
      question: 'Is it white?',
      testimony: 'Yes, she told me is.',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.HEARSAY]),
    },
    {
      question: 'No, no, no, no, no',
      testimony: 'Yes, so no hearsay?!?',
      type: ExaminationType.DIRECT,
      objections: new Set([]),
    },
  ])('$objections', ({ question, testimony, type, objections }) => {
    expect(getObjections(question, testimony, type)).toEqual(objections);
  });
});

describe('leading cases', () => {
  test.each([
    {
      question: 'Why did you do that?',
      testimony: 'Pete do',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.LEADING]),
    },
    {
      question: 'Do you agree that it is pink?',
      testimony: 'Yes, she me pink.',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.LEADING]),
    },
    {
      question: 'No, no, no, right?',
      testimony: 'Yes, so right hearsay?!?',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.LEADING]),
    },
    {
      question: 'No, no, no, correct?',
      testimony: 'Yes, so no hearsay?!?',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.LEADING]),
    },
    {
      question: 'No, no, no, correct?',
      testimony: 'Yes, so no hearsay?!?',
      type: ExaminationType.CROSS,
      objections: new Set([]),
    },
    {
      question: 'Correct. Do you agree?',
      testimony: 'Yes, so do not hearsay?!?',
      type: ExaminationType.DIRECT,
      objections: new Set([]),
    },
  ])('$objections', ({ question, testimony, type, objections }) => {
    expect(getObjections(question, testimony, type)).toEqual(objections);
  });
});

describe('non responsive cases', () => {
  test.each([
    {
      question: 'Why did you do that?',
      testimony: 'Pete',
      type: ExaminationType.CROSS,
      objections: new Set([Objection.NON_RESPONSIVE]),
    },
    {
      question: '  Do you that it is pink?',
      testimony: 'Yes, she to me.',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.NON_RESPONSIVE]),
    },
    {
      question: 'No, no,  no, right?',
      testimony: 'Yes, so not   hearsay?!? no?',
      type: ExaminationType.CROSS,
      objections: new Set([]),
    },
    {
      question: ' No,, correct?',
      testimony: 'noooooooo no',
      type: ExaminationType.CROSS,
      objections: new Set([]),
    },
  ])('$objections', ({ question, testimony, type, objections }) => {
    expect(getObjections(question, testimony, type)).toEqual(objections);
  });
});

describe('relevance cases', () => {
  test.each([
    {
      question: 'Why?',
      testimony: 'Why do you ask me?',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.RELEVANCE]),
    },
    {
      question: 'Do you?',
      testimony: 'Yes, she told you.',
      type: ExaminationType.CROSS,
      objections: new Set([Objection.RELEVANCE]),
    },
    {
      question: 'No, no, no, right?',
      testimony: 'Yes, so right hearsay?!?',
      type: ExaminationType.CROSS,
      objections: new Set([]),
    },
  ])('$objections', ({ question, testimony, type, objections }) => {
    expect(getObjections(question, testimony, type)).toEqual(objections);
  });
});

describe('speculation cases', () => {
  test.each([
    {
      question: 'Why not me?',
      testimony: 'Why think?',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.SPECULATION]),
    },
    {
      question: 'Do you think so?',
      testimony: 'Yes, she told you.',
      type: ExaminationType.CROSS,
      objections: new Set([Objection.SPECULATION]),
    },
  ])('$objections', ({ question, testimony, type, objections }) => {
    expect(getObjections(question, testimony, type)).toEqual(objections);
  });
});

describe('error cases', () => {
  test.each([
    {
      question: '',
      testimony: 'No you!',
      type: ExaminationType.CROSS,
      objections: new Set([Objection.ERROR]),
    },
    {
      question: 'This is direct, yes!',
      testimony: '',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.ERROR]),
    },
    {
      question: '',
      testimony: '',
      type: ExaminationType.DIRECT,
      objections: new Set([Objection.ERROR]),
    },
    {
      question: 'This is direct, yes!',
      testimony: 'Yes, so not argumentative!',
      type: 555,
      objections: new Set([Objection.ERROR]),
    },
  ])('$objections', ({ question, testimony, type, objections }) => {
    expect(getObjections(question, testimony, type)).toEqual(objections);
  });
});
