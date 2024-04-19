import { getData } from './dataStore';

function postsView() {
  const data: any = getData();
  const posts: any = [];
  for (const posts of data.post) {
    posts.push({
      postId: posts.postId,
      sender: posts.sender,
      title: posts.stitle,
      timeSent: posts.timeSent,
    });
  }
  return { posts: posts };
}

export {
  postsView
};
