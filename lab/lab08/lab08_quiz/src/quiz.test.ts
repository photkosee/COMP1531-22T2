import request from 'sync-request';
import { SERVER_URL } from './config';

beforeEach(() => {
  request('DELETE', SERVER_URL + '/clear');
});

afterAll(() => {
  request('DELETE', SERVER_URL + '/clear');
});

test('success', () => {
  let res = request(
    'POST',
    SERVER_URL + '/quiz/create',
    {
      json: {
        quizTitle: 'COMP',
        quizSynopsis: '1531',
      }
    }
  );
  expect(res.statusCode).toEqual(200);
  const data = JSON.parse(res.getBody() as string);
  expect(data).toStrictEqual({ quizId: 1 });

  res = request(
    'GET',
    SERVER_URL + '/quiz/details',
    {
      qs: {
        quizId: 1,
      }
    }
  );
  expect(res.statusCode).toEqual(200);
  const detail = JSON.parse(res.getBody() as string);
  expect(detail).toStrictEqual({
    quiz: {
      quizId: 1,
      quizTitle: 'COMP',
      quizSynopsis: '1531',
      questions: [],
    }
  });

  res = request(
    'PUT',
    SERVER_URL + '/quiz/edit',
    {
      json: {
        quizId: 1,
        quizTitle: 'MATH',
        quizSynopsis: '2A',
      }
    }
  );
  expect(res.statusCode).toEqual(200);
  const edit = JSON.parse(res.getBody() as string);
  expect(edit).toStrictEqual({});

  res = request(
    'PUT',
    SERVER_URL + '/quiz/edit',
    {
      json: {
        quizId: -2,
        quizTitle: 'MATH',
        quizSynopsis: '2A',
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'GET',
    SERVER_URL + '/quizzes/list',
    {
      qs: {}
    }
  );
  expect(res.statusCode).toEqual(200);
  const list = JSON.parse(res.getBody() as string);
  expect(list).toStrictEqual({
    quizzes: [{
      quizId: 1,
      quizTitle: 'MATH',
    }]
  });

  res = request(
    'POST',
    SERVER_URL + '/question/add',
    {
      json: {
        quizId: 1,
        questionString: 'How are you?',
        questionType: 'single',
        answers: [{ isCorrect: true, answerString: 21 }],
      }
    }
  );
  expect(res.statusCode).toEqual(200);
  const qadd = JSON.parse(res.getBody() as string);
  expect(qadd).toStrictEqual({ questionId: 1 });

  res = request(
    'POST',
    SERVER_URL + '/question/add',
    {
      json: {
        quizId: 1,
        questionString: 'How are you?',
        questionType: 'single',
        answers: [{ isCorrect: true, answerString: '' }],
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'PUT',
    SERVER_URL + '/question/edit',
    {
      json: {
        questionId: 1,
        questionString: 'How old are you?',
        questionType: 'single',
        answers: [{ isCorrect: true, answerString: 21 }],
      }
    }
  );
  expect(res.statusCode).toEqual(200);
  const qedit = JSON.parse(res.getBody() as string);
  expect(qedit).toStrictEqual({});

  res = request(
    'PUT',
    SERVER_URL + '/question/edit',
    {
      json: {
        questionId: 1,
        questionString: '',
        questionType: 'single',
        answers: [{ isCorrect: true, answerString: 21 }],
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'PUT',
    SERVER_URL + '/question/edit',
    {
      json: {
        questionId: 1,
        questionString: 'How old are you?',
        questionType: 'multiple',
        answers: [{ isCorrect: true, answerString: 21 }],
      }
    }
  );
  expect(res.statusCode).toEqual(200);
  const qedit2 = JSON.parse(res.getBody() as string);
  expect(qedit2).toStrictEqual({});

  res = request(
    'PUT',
    SERVER_URL + '/question/edit',
    {
      json: {
        questionId: 1,
        questionString: 'How old are you?',
        questionType: 'brah',
        answers: [{ isCorrect: true, answerString: 21 }],
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'PUT',
    SERVER_URL + '/question/edit',
    {
      json: {
        questionId: 1,
        questionString: 'How old are you?',
        questionType: 'single',
        answers: [{ isCorrect: 'nah', answerString: 21 }],
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'DELETE',
    SERVER_URL + '/question/remove',
    {
      qs: {
        questionId: 1,
      }
    }
  );
  expect(res.statusCode).toEqual(200);
  const qremove = JSON.parse(res.getBody() as string);
  expect(qremove).toStrictEqual({});

  res = request(
    'DELETE',
    SERVER_URL + '/quiz/remove',
    {
      qs: {
        quizId: 1,
      }
    }
  );
  expect(res.statusCode).toEqual(200);
  const remove = JSON.parse(res.getBody() as string);
  expect(remove).toStrictEqual({});
});

test('fail', () => {
  let res = request(
    'POST',
    SERVER_URL + '/quiz/create',
    {
      json: {
        quizTitle: '',
        quizSynopsis: '',
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'GET',
    SERVER_URL + '/quiz/details',
    {
      qs: {
        quizId: 1,
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'PUT',
    SERVER_URL + '/quiz/edit',
    {
      json: {
        quizId: 1,
        quizTitle: '',
        quizSynopsis: '',
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'DELETE',
    SERVER_URL + '/quiz/remove',
    {
      qs: {
        quizId: 1,
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'POST',
    SERVER_URL + '/question/add',
    {
      json: {
        quizId: 1,
        questionString: 'Hey',
        questionType: 'Tri',
        answers: [{ isCorrect: false, answerString: 'No' }],
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'PUT',
    SERVER_URL + '/question/edit',
    {
      json: {
        questionId: 1,
        questionString: 'Hey',
        questionType: 'Tri',
        answers: [{ isCorrect: false, answerString: 'No' }],
      }
    }
  );
  expect(res.statusCode).toEqual(400);

  res = request(
    'DELETE',
    SERVER_URL + '/question/remove',
    {
      qs: {
        questionId: 1,
      }
    }
  );
  expect(res.statusCode).toEqual(400);
});
