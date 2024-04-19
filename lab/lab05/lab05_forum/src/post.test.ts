import request from 'sync-request';
import { SERVER_URL } from './config';

const ERROR = { error: 'error' };

beforeEach(() => {
  request('DELETE', SERVER_URL + '/clear');
});

describe('Testing create post', () => {
  test('success create', () => {
    const res = request(
      'POST',
      SERVER_URL + '/post/create',
      {
        json: {
          sender: 'a',
          title: 'a',
          content: 'a',
        }
      }
    );
    const data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ postId: 1 });
  });
});

describe('Testing create post', () => {
  test('invalid inputs', () => {
    let res = request(
      'POST',
      SERVER_URL + '/post/create',
      {
        json: {
          sender: '',
          title: '',
          content: '',
        }
      }
    );
    let data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual(ERROR);

    res = request(
      'POST',
      SERVER_URL + '/post/create',
      {
        json: {
          sender: '',
          title: 'a',
          content: 'a',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual(ERROR);

    res = request(
      'POST',
      SERVER_URL + '/post/create',
      {
        json: {
          sender: 'a',
          title: '',
          content: 'a',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual(ERROR);

    res = request(
      'POST',
      SERVER_URL + '/post/create',
      {
        json: {
          sender: 'a',
          title: 'a',
          content: '',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual(ERROR);
  });
});

describe('Testing comment', () => {
  test('success comment', () => {
    let res = request(
      'POST',
      SERVER_URL + '/post/create',
      {
        json: {
          sender: 'a',
          title: 'a',
          content: 'a',
        }
      }
    );
    let data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ postId: 1 });

    res = request(
      'POST',
      SERVER_URL + '/post/comment',
      {
        json: {
          postId: 1,
          sender: 'a',
          comment: 'a',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ commentId: 1 });
  });
});

describe('Testing comment', () => {
  test('invalid inputs', () => {
    let res = request(
      'POST',
      SERVER_URL + '/post/comment',
      {
        json: {
          postId: 1,
          sender: '',
          comment: '',
        }
      }
    );
    let data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual(ERROR);

    res = request(
      'POST',
      SERVER_URL + '/post/comment',
      {
        json: {
          postId: 2,
          sender: 'a',
          comment: 'a',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual(ERROR);

    res = request(
      'POST',
      SERVER_URL + '/post/comment',
      {
        json: {
          postId: 1,
          sender: 'a',
          comment: '',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual(ERROR);

    res = request(
      'POST',
      SERVER_URL + '/post/comment',
      {
        json: {
          postId: 1,
          sender: '',
          comment: 'a',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual(ERROR);
  });
});

describe('Testing view', () => {
  test('success view', () => {
    let res = request(
      'POST',
      SERVER_URL + '/post/create',
      {
        json: {
          sender: 'a',
          title: 'a',
          content: 'a',
        }
      }
    );
    let data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ postId: 1 });

    res = request(
      'POST',
      SERVER_URL + '/post/comment',
      {
        json: {
          postId: 1,
          sender: 'a',
          comment: 'a',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ commentId: 1 });

    res = request(
      'POST',
      SERVER_URL + '/post/comment',
      {
        json: {
          postId: 1,
          sender: 'a',
          comment: 'b',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ commentId: 2 });

    res = request(
      'GET',
      SERVER_URL + '/post/view',
      {
        qs: {
          postId: 1,
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({
      post: {
        postId: 1,
        sender: 'a',
        title: 'a',
        timeSent: Math.floor(Date.now() / 1000),
        content: 'a',
        comments: [{
          commentId: 2,
          sender: 'a',
          comment: 'b',
          timeSent: Math.floor(Date.now() / 1000),
        },
        {
          commentId: 1,
          sender: 'a',
          comment: 'a',
          timeSent: Math.floor(Date.now() / 1000),
        }],
      }
    });
  });
});

describe('Testing view', () => {
  test('invalid inputs', () => {
    let res = request(
      'POST',
      SERVER_URL + '/post/create',
      {
        json: {
          sender: 'a',
          title: 'a',
          content: 'a',
        }
      }
    );
    let data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ postId: 1 });
    res = request(
      'POST',
      SERVER_URL + '/post/comment',
      {
        json: {
          postId: 1,
          sender: 'a',
          comment: 'a',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ commentId: 1 });

    res = request(
      'POST',
      SERVER_URL + '/post/comment',
      {
        json: {
          postId: 1,
          sender: 'a',
          comment: 'b',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ commentId: 2 });

    res = request(
      'GET',
      SERVER_URL + '/post/view',
      {
        qs: {
          postId: 2,
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ ERROR });
  });
});

describe('Testing view all', () => {
  test('success view all', () => {
    let res = request(
      'GET',
      SERVER_URL + '/posts/view',
      {
        qs: {}
      }
    );
    let data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({
      posts: []
    });

    res = request(
      'POST',
      SERVER_URL + '/post/create',
      {
        json: {
          sender: 'a',
          title: 'a',
          content: 'a',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ postId: 1 });

    res = request(
      'POST',
      SERVER_URL + '/post/create',
      {
        json: {
          sender: 'b',
          title: 'b',
          content: 'b',
        }
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({ postId: 2 });

    res = request(
      'GET',
      SERVER_URL + '/posts/view',
      {
        qs: {}
      }
    );
    data = JSON.parse(res.getBody() as string);
    expect(data).toStrictEqual({
      posts: [{
        postId: 1,
        sender: 'a',
        title: 'a',
        timeSent: Math.floor(Date.now() / 1000),
      },
      {
        postId: 2,
        sender: 'b',
        title: 'b',
        timeSent: Math.floor(Date.now() / 1000),
      }]
    });
  });
});
