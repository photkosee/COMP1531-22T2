export enum Objection {
  /**
  * By default, enum are integers 0, 1, 2, ...
  * However, we can also give them string values
  */
  ARGUMENTATIVE = 'argumentative',
  COMPOUND = 'compound',
  HEARSAY = 'hearsay',
  LEADING = 'leading',
  NON_RESPONSIVE = 'non-responsive',
  RELEVANCE = 'relevance',
  SPECULATION = 'speculation',
  ERROR = 'error',
}

export enum ExaminationType {
  /**
    * It is also possible to specify a "start" number.
    *
    * Below would assign CROSS = 1, DIRECT = 2, the next
    * would be 3, etc.
    */
  CROSS = 1,
  DIRECT = 2,
}

// Helper function - feel free to remove / modify.
function isArgumentative(question: string) {
  return !question.endsWith('?');
}

function isCompound(question: string) {
  return question.split('?').length - 1 >= 2;
}

function isHearsay(testimony: string) {
  return testimony.includes('heard from') || testimony.includes('told me');
}

function isLeading(question: string) {
  return question.endsWith('right?') || question.endsWith('correct?') ||
         question.startsWith('why did you') || question.startsWith('do you agree');
}

function isNonResponsive(question: string, testimony: string) {
  const tmpQuestion: string = question.replace(/[^a-z0-9\s]/g, '');
  const tmpTestimony: string = testimony.replace(/[^a-z0-9\s]/g, '');

  let i = 0;
  let j = -1;
  while (i < tmpQuestion.length) {
    i = j + 1;
    while (i < tmpQuestion.length && tmpQuestion[i] === ' ') {
      i++;
    }
    if (i >= tmpQuestion.length) break;
    j = i + 1;
    while (j < tmpQuestion.length && tmpQuestion[j] !== ' ') {
      j++;
    }
    if (tmpTestimony.includes(tmpQuestion.substring(i, j))) {
      return false;
    }
  }

  return true;
}

function isRelevance(question: string, testimony: string) {
  return testimony.length > (question.length * 2);
}

function isSpeculationDirect(testimony: string) {
  return testimony.includes('think');
}

function isSpeculationCross(question: string) {
  return question.includes('think');
}

/**
 * Feel free to modify the function below as you see fit,
 * so long as you satisfy the specification.
 */
export function getObjections(
  question: string,
  testimony: string,
  type: ExaminationType
): Set<Objection> {
  // Convert given question and testimony to lowercase
  question = question.toLowerCase();
  testimony = testimony.toLowerCase();

  const objections = new Set<Objection>();

  if (question === '' || testimony === '' || (type !== ExaminationType.CROSS && type !== ExaminationType.DIRECT)) {
    objections.add(Objection.ERROR);
  } else if (type === ExaminationType.CROSS) {
    if (isArgumentative(question)) {
      objections.add(Objection.ARGUMENTATIVE);
    }
    if (isCompound(question)) {
      objections.add(Objection.COMPOUND);
    }
    if (isHearsay(testimony)) {
      objections.add(Objection.HEARSAY);
    }
    if (isNonResponsive(question, testimony)) {
      objections.add(Objection.NON_RESPONSIVE);
    }
    if (isRelevance(question, testimony)) {
      objections.add(Objection.RELEVANCE);
    }
    if (isSpeculationCross(question)) {
      objections.add(Objection.SPECULATION);
    }
  } else {
    // Type is ExaminationType.DIRECT
    if (isCompound(question)) {
      objections.add(Objection.COMPOUND);
    }
    if (isHearsay(testimony)) {
      objections.add(Objection.HEARSAY);
    }
    if (isLeading(question)) {
      objections.add(Objection.LEADING);
    }
    if (isNonResponsive(question, testimony)) {
      objections.add(Objection.NON_RESPONSIVE);
    }
    if (isRelevance(question, testimony)) {
      objections.add(Objection.RELEVANCE);
    }
    if (isSpeculationDirect(testimony)) {
      objections.add(Objection.SPECULATION);
    }
  }

  return objections;
}
