import { getData, setData } from './dataStore';

const ERROR = { error: 'error' };

interface newPostDetails {
  postId: number,
  sender: string,
  title: string,
  timeSent: number,
  content: string,
  comments: any,
}

interface newCommentsDetails {
  commentId: number,
  sender: string,
  comment: string,
  timeSent: number,
}

function postCreate(sender: string, title: string, content: string) {
  if (sender === '' || title === '' || content === '') {
    return ERROR;
  }
  const data: any = getData;
  const postId: number = (data.post.length) + 1;
  const timeSent: number = Math.floor(Date.now() / 1000);
  const newPostDetails: newPostDetails = {
    postId: postId,
    sender: sender,
    title: title,
    timeSent: timeSent,
    content: content,
    comments: [],
  };
  data.post.unshift(newPostDetails);
  setData(data);
  return { postId: postId };
}

function postComment(postId: number, sender: string, comment: string) {
  const data: any = getData();
  let checkId = false;
  for (const post of data.post) {
    if (postId === post.postId) {
      checkId = true;
    }
  }
  if (checkId === false || sender === '' || comment === '') {
    return ERROR;
  }
  const commentId: number = (data.comments.length) + 1;
  const timeSent: number = Math.floor(Date.now() / 1000);
  const newCommentsDetails: newCommentsDetails = {
    commentId: commentId,
    sender: sender,
    comment: comment,
    timeSent: timeSent,
  };
  for (const post of data.post) {
    if (postId === post.postId) {
      post.comments.unshift(newCommentsDetails);
    }
  }
  data.comments.unshift(newCommentsDetails);
  return { commentId: commentId };
}

function postView(postId: number) {
  const data: any = getData();
  for (const post of data.post) {
    if (postId === post.postId) {
      return { post: post };
    }
  }
  return ERROR;
}

export {
  postCreate,
  postComment,
  postView
};
