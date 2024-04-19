import fs from 'fs';

interface Game {
    score: number;
    mistakesRemaining: number;
    cluesRemaining: number;
    dictionary: string[];
}

const currentGame: Game = {
  score: 0,
  mistakesRemaining: 3,
  cluesRemaining: 3,
  dictionary: [],
};

// Note: key "dictionary" is NOT returned in this function.
export function getGameInfo() {
  return {
    score: currentGame.score,
    mistakesRemaining: currentGame.mistakesRemaining,
    cluesRemaining: currentGame.cluesRemaining,
  };
}

export function addWord(word: string) {
  for (const element of currentGame.dictionary) {
    if (element.localeCompare(word) === 0) {
      currentGame.mistakesRemaining -= 1;
      return { error: 'error' };
    }
  }
  currentGame.dictionary.push(word);
  currentGame.score += 1;
  return undefined;
}

export function removeWord(word: string) {
  let i = 0;
  for (const element of currentGame.dictionary) {
    if (element.localeCompare(word) === 0) {
      currentGame.dictionary = currentGame.dictionary.slice(0, i);
      currentGame.score += 1;
      return undefined;
    }
    i++;
  }
  currentGame.mistakesRemaining -= 1;
  return { error: 'error' };
}

export function viewDictionary() {
  if (currentGame.cluesRemaining === 0) {
    return { error: 'error' };
  }
  const array: any = [];
  for (const element of currentGame.dictionary) {
    array.push(element);
  }
  return { dictionary: array };
}

export function resetGame() {
  currentGame.score = 0;
  currentGame.cluesRemaining = 3;
  currentGame.mistakesRemaining = 3;
  currentGame.dictionary = [];
  return undefined;
}

export function saveGame(name: string) {
  // FIXME
  throw new Error('saveGame is not implemented!');
}

export function loadGame(name: string) {
  // FIXME
  throw new Error('loadGame is not implemented!');
}
