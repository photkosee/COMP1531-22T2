import { getData, setData } from './dataStore';
import HTTPError from 'http-errors';

interface newQuizDetails {
  quizId: number,
  quizTitle: string,
  quizSynopsis: string,
  questions: any,
}

interface newQuestionsDetails {
  questionId: number,
  questionString: string,
  questionType: string,
  answers: any,
}

interface answers {
  isCorrect: boolean,
  answerString: string,
}

export function quizCreate(quizTitle: string, quizSynopsis: string) {
  if (quizTitle === '' || quizSynopsis === '') {
    throw HTTPError(400, 'Cannot create quiz');
  }

  const data: any = getData();
  const quizId: number = data.quizId;
  const array: any = [];
  data.quizId += 1;
  const newQuizDetails: newQuizDetails = {
    quizId: quizId,
    quizTitle: quizTitle,
    quizSynopsis: quizSynopsis,
    questions: array,
  };
  data.quiz.push(newQuizDetails);
  setData(data);

  return { quizId: quizId };
}

export function quizDetails(quizId: number) {
  const data: any = getData();
  for (let i = 0; i < data.quiz.length; i++) {
    if (quizId === data.quiz[i].quizId) {
      return {
        quiz: {
          quizId: data.quiz[i].quizId,
          quizTitle: data.quiz[i].quizTitle,
          quizSynopsis: data.quiz[i].quizSynopsis,
          questions: data.quiz[i].questions,
        }
      }
    }
  }

  throw HTTPError(400, 'Invalid quizId.');
}

export function quizEdit(quizId: number, quizTitle: string, quizSynopsis: string) {
  if (quizTitle === '' || quizSynopsis === '') {
    throw HTTPError(400, 'Invalid empty string.');
  }
  const data: any = getData();
  for (let i = 0; i < data.quiz.length; i++) {
    if (quizId === data.quiz[i].quizId) {
      data.quiz[i].quizTitle = quizTitle;
      data.quiz[i].quizSynopsis = quizSynopsis;
      return {};
    }
  }

  throw HTTPError(400, 'Invalid quizId.');
}

export function quizRemove(quizId: number) {
  const data: any = getData();
  for (let i = 0; i < data.quiz.length; i++) {
    if (quizId === data.quiz[i].quizId) {
      data.quiz.splice(i, 1);
      return {};
    }
  }

  throw HTTPError(400, 'Invalid quizId.');
}

export function quizList() {
  const data: any = getData();
  const array: any = [];
  for (let i = 0; i < data.quiz.length; i++) {
    array.push({ quizId: data.quiz[i].quizId, quizTitle: data.quiz[i].quizTitle });
  }

  return { quizzes: array };
}

export function questionAdd(
  quizId: number,
  questionString: string,
  questionType: string,
  answers: answers[]) {
  if (questionString === '') {
    throw HTTPError(400, "String can't be empty.");
  }
  let countAnswer = 0;
  let countError = false;
  for (const correct of answers) {
    if (correct.isCorrect === true) {
      countAnswer += 1;
    }
    if ((correct.isCorrect !== true && correct.isCorrect !== false) ||
    correct.answerString === '') {
      countError = true;
    }
  }
  const data: any = getData();
  if (questionType === 'single' && countAnswer === 1 &&
  countError === false) {
    for (const quiz of data.quiz) {
      if (quizId === quiz.quizId) {
        const questionId: number = data.questionId;
        data.questionId += 1;
        const newQuestionsDetails: newQuestionsDetails = {
          questionId: questionId,
          questionString: questionString,
          questionType: questionType,
          answers: [...answers],
        };
        quiz.questions.push(newQuestionsDetails);
        setData(data);
        return { questionId: questionId };
      }
    }
  } else if (questionType === 'multiple' && countAnswer >= 1 &&
  countError === false) {
    for (const quiz of data.quiz) {
      if (quizId === quiz.quizId) {
        const questionId: number = data.questionId;
        data.questionId += 1;
        const newQuestionsDetails: newQuestionsDetails = {
          questionId: questionId,
          questionString: questionString,
          questionType: questionType,
          answers: [...answers],
        };
        quiz.questions.push(newQuestionsDetails);
        setData(data);
        return { questionId: questionId };
      }
    }
  }

  throw HTTPError(400, 'Invalid input.');
}

export function questionEdit(
  questionId: number,
  questionString: string,
  questionType: string,
  answers: answers[]) {
  if (questionString === '') {
    throw HTTPError(400, "String can't be empty.");
  }
  let countAnswer = 0;
  let countError = false;
  for (const correct of answers) {
    if (correct.isCorrect === true) {
      countAnswer += 1;
    }
    if ((correct.isCorrect !== true && correct.isCorrect !== false) ||
    correct.answerString === '') {
      countError = true;
    }
  }
  const data: any = getData();
  if (questionType === 'single' && countAnswer === 1 &&
  countError === false) {
    for (const quiz of data.quiz) {
      for (const question of quiz.questions) {
        if (questionId === question.questionId) {
          question.questionString = questionString;
          question.questionType = questionType;
          question.answers = [...answers];
          setData(data);
          return {};
        }
      }
    }
  } else if (questionType === 'multiple' && countAnswer >= 1 &&
  countError === false) {
    for (const quiz of data.quiz) {
      for (const question of quiz.questions) {
        if (questionId === question.questionId) {
          question.questionString = questionString;
          question.questionType = questionType;
          question.answers = [...answers];
          setData(data);
          return {};
        }
      }
    }
  }

  throw HTTPError(400, 'Invalid input.');
}

export function questionRemove(questionId: number) {
  const data: any = getData();
  for (const quiz of data.quiz) {
    for (let i = 0; i < quiz.questions.length; i++) {
      if (questionId === quiz.questions[i].questionId) {
        quiz.questions.splice(i, 1);
        setData(data);
        return {};
      }
    }
  }

  throw HTTPError(400, 'Invalid questionId.');
}

export function clear() {
  const data: any = getData();
  data.quiz = [];
  data.quizId = 1;
  data.questionId = 1;
  setData(data);
  return {};
}
